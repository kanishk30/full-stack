import movieSlice from "../redux/movieSlice";
const moviesActions = movieSlice.actions;


export const fetchTrendingMovieMiddleware = param => {
    return async function (dispatch) {
        try {
            dispatch(moviesActions.movieLoading(true))
            const resp = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=e278e3c498ab14e0469bf6d86da17045&page=${param}`)
            const data =  await resp.json()
            dispatch(moviesActions.movieData(data.results))
            
        } catch (error) {
            dispatch(moviesActions.movieError())
            
        } finally {
            dispatch(moviesActions.movieLoading(false))

        }
    }
}