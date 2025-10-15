import React, {useState, useEffect} from 'react'
import {BASE_IMG_URL, GENREIDS} from '../util'

const WatchList = () => {
      const [watchlist, setWatchlist] = useState([]);

      useEffect(() => {
          const moveisFromLocalStorage = localStorage.getItem("movies");
          if(moveisFromLocalStorage){
              setWatchlist(JSON.parse(moveisFromLocalStorage))
          }
      }, [])

      function handleAscRatings(){
        const sortedAscMovies = watchlist.sort((a,b) => a.vote_average - b.vote_average);
        // setWatchlist(sortedAscMovies) NT WORKING as same reference.
        setWatchlist(sortedAscMovies.slice())
      }

      function handleDescRatings(){
          const sortedDescMovies = watchlist.sort((a,b) => b.vote_average - a.vote_average);
        setWatchlist([...sortedDescMovies])
      }
          
  return (
    <div>
      <table className='w-full border border-gray-200 shadow-md m-5 rounded-lg'>
          <thead>
              <tr className='bg-gray-50'>
                <th>Name</th>
                <th>
                  <i class="fa-solid fa-arrow-up" onClick={handleAscRatings}></i>
                  <span className='px-2'>Ratings</span>
                  <i class="fa-solid fa-arrow-down" onClick={handleDescRatings}></i>
                  </th>
                <th>Popularity</th>
                <th>Genre</th>
                <th>Delete</th>
              </tr>
          </thead>
          <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
            {watchlist.map((movieObj) => (
              <tr>
                <td className='flex items-center p-4'>
                  <img src={BASE_IMG_URL+movieObj.backdrop_path} alt='Movie poster' className='h-[6rem] w-[10rem] p-4 object-fill' />
                  <div className='font-medium text-gray-700 '>{movieObj.title}</div>
                </td>
                <td className='p-4'>{movieObj.vote_average}</td>
                <td className='p-4'>{movieObj.popularity}</td>
                {/* <td>{GENREIDS[movieObj.genre_ids[0]]}</td> */}
                <td>
                  {movieObj.genre_ids
                    .map((genreId) => GENREIDS[genreId])
                    .join(', ')
                  }
                </td>
                <td className='p-4'><button>❌</button></td>
              </tr>
            ))}
              
          
          </tbody>
      </table>
    </div>
  )
}

export default WatchList
