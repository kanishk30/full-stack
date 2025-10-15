import React, {useState, useEffect} from 'react'
import {BASE_IMG_URL, GENREIDS, ALL_GENRES} from '../util'



const WatchList = () => {
      const [watchlist, setWatchlist] = useState([]);
      const [search, setSearch] = useState("");
      const [genreList, setGenreList] = useState([]);
      const [currGenre, setCurrGenre] = useState(ALL_GENRES);
      

      useEffect(() => {
          const moveisFromLocalStorage = localStorage.getItem("movies");
          if(moveisFromLocalStorage){
              setWatchlist(JSON.parse(moveisFromLocalStorage))
          }
      }, []);


      useEffect(() => {
        const relevantGenreList = watchlist.map((movieObj) =>movieObj.genre_ids)
        // const allGenres = 
        console.log(relevantGenreList)
        let temp = [];
        // relevantGenreList.forEach((genreArr) => {
        //   genreArr.forEach(genreId => temp.push(genreId))
        // })
        // OR
        temp = relevantGenreList.flat(2)
        // now remove duplicate.
        temp = [...new Set(temp)].map(id => GENREIDS[id])

        setGenreList([ALL_GENRES, ...temp])

      }, [watchlist])

      function handleAscRatings(){
        const sortedAscMovies = watchlist.sort((a,b) => a.vote_average - b.vote_average);
        // setWatchlist(sortedAscMovies) NT WORKING as same reference.
        setWatchlist(sortedAscMovies.slice())
      }

      function handleDescRatings(){
          const sortedDescMovies = watchlist.sort((a,b) => b.vote_average - a.vote_average);
        setWatchlist([...sortedDescMovies])
      }

      function handleSearch(ev) {
        setSearch(ev.target.value);
      }

      function handleGenreFilter(genre) {
        setCurrGenre(genre)
      }

      
          
  return (
    <>
    {/* Genre starts */}
    <div className='flex justify-center flex-wrap gap-4'>
      {genreList.map((genre) => {
        return (
          <div className={`h-3[rem] w-[8rem] mx-4 p-3 rounded-lg 
                        text-white font-bold 
                        ${currGenre === genre ? `bg-blue-500 ` : `bg-gray-500`}`
          }
          onClick={() => handleGenreFilter(genre)}
          role='button'

          >
            {genre}
          </div>
        )
      })}

    </div>

    {/* search starts */}
    <div className='flex justify-center my-8'>
        <input value={search} onChange={handleSearch} placeholder='Search by movie name'
          className='border border-gray-500 h-[3rem] w-[15rem] px-4 rounded-lg'
        />
    </div>
    {/* table starts */}
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
            {watchlist
            .filter((movieObj) => movieObj.title.toUpperCase().startsWith(search.toUpperCase()))
            .filter((movieObj) => {
              if(currGenre === ALL_GENRES) return true
              return movieObj.genre_ids.map((genreId) => GENREIDS[genreId]).includes(currGenre)
            } )
            .map((movieObj) => (
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
                <td className='p-4'><button  >❌</button></td>
              </tr>
            ))}
              
          
          </tbody>
      </table>
    </div>
    </>
  )
}

export default WatchList
