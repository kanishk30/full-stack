import React, { useState, useEffect } from 'react'

export default function MovieContextWrapper({children}) {
    const [watchlist, setWatchlist] = useState([]);

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

       useEffect(() => {
            const moveisFromLocalStorage = localStorage.getItem("movies");
            if(moveisFromLocalStorage){
                setWatchlist(JSON.parse(moveisFromLocalStorage))
            }
        }, [])

    return <MovieContext.Provider value={{addToWatchList, removeFromWatchList, watchlist, setWatchlist}}>
        {children}
        </MovieContext.Provider>
}

export const MovieContext = React.createContext()