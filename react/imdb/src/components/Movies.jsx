import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1);

    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const moveisFromLocalStorage = localStorage.getItem("movies");
        if(moveisFromLocalStorage){
            setWatchlist(JSON.parse(moveisFromLocalStorage))
        }
    }, [])
    
      useEffect(() => {
        async function fetchTrendingMovie() {
          fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=e278e3c498ab14e0469bf6d86da17045&page=${pageNo}`)
          .then(res => res.json())
          .then(data => {
            setMovies(data.results)
          })
        }
        fetchTrendingMovie()
      }, [pageNo])

    const handlePrev = () => {
        if(pageNo === 1) return;
        setPageNo(pageNo - 1)
    }

    const handleNext = () => {
        setPageNo(pageNo + 1)
    }

    const addToWatchList = (movieObj) => {
        // add this movieObj to watchlist array.
        const updatedList = [...watchlist, movieObj]
        console.log(watchlist)
        setWatchlist(updatedList);
        localStorage.setItem("movies", JSON.stringify(updatedList));
    }

    const removeFromWatchList = (movieObj) => {
        // remove from movieObj to watchlist array.
        const filteredMovies = watchlist.filter((movie) => movie.id !== movieObj.id);
        setWatchlist(filteredMovies)
        localStorage.setItem("movies", JSON.stringify(filteredMovies));

    }


  return (
    <div>
        <h1 className='text-2xl font-bold text-center m-4'>Trending Movies</h1>
        <div
            className='flex justify-evenly flex-wrap gap-8'
        >
            {movies.map((movieObj) => (
                <>
                    <MovieCard 
                        movieObj={movieObj} 
                        addToWatchList={addToWatchList} 
                        removeFromWatchList={removeFromWatchList} 
                        watchlist={watchlist}
                    />
                </>
            ))}
        </div>

        <div className='bg-gray-500 h-[50px] p-4 w-full flex justify-center gap-2 mt-8'>
            <span onClick={handlePrev} className='cursor-pointer px-4'>
                <i class="fa-solid fa-arrow-left"></i>
            </span>
            <span>{pageNo}</span>
            <span onClick={handleNext} className='cursor-pointer px-4'>
                <i class="fa-solid fa-arrow-right"></i>
            </span>
        </div>
    </div>
  )
}

export default Movies
