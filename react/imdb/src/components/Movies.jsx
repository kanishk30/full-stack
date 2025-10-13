import React, { useEffect, useState } from 'react'
import {BASE_IMG_URL} from '../util'

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1);
    
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
        console.log({movieObj})
    }

  return (
    <div>
        <h1 className='text-2xl font-bold text-center m-4'>Trending Movies</h1>
        <div
            className='flex justify-evenly flex-wrap gap-8'
        >
            {movies.map((movieObj) => (
                <>
                    <div
                         className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl 
                         flex items-start justify-between 
                         hover:cursor-pointer hover:scale-105 duration-300'
                    style={{
                        backgroundImage: `url(${BASE_IMG_URL}${movieObj.poster_path})`
                    }}>
                       <div className='text-white w-full text-xl bg-gray-900/65 p-3'>
                        {movieObj.title}
                       </div>
                       <div 
                            className=' bg-gray-900/65 flex justify-center h-4 w-4 items-center m-3'
                            role='button'
                            onClick={() => addToWatchList(movieObj)}
                            >
                          😍
                       </div>
                       {/* <div>
                        ❌
                       </div> */}
                    </div>
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
