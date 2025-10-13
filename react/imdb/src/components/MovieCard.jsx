import React from 'react'
import {BASE_IMG_URL} from '../util'

const MovieCard = (props) => {
    const {movieObj, addToWatchList, removeFromWatchList, watchlist} = props;


    function doesContainWatchlist(movieObj){
        for(let i = 0 ; i < watchlist.length; i++){
            if(watchlist[i].id === movieObj.id){
                return true; // already added to watchlist. show cross
            } 
        }
       return false; // show heart

    }

    
  return (                   
    <div
                         className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl 
                         flex items-start justify-between 
                         hover:cursor-pointer hover:scale-105 duration-300'
                    style={{
                        backgroundImage: `url(${BASE_IMG_URL}${movieObj.poster_path})`
                    }}
                    key={movieObj.id}>
                       <div className='text-white w-full text-xl bg-gray-900/65 p-3'>
                        {movieObj.title}
                       </div>
                       {doesContainWatchlist(movieObj) ?  <div 
                            className=' bg-gray-900/65 flex justify-center h-4 w-4 items-center m-3'
                            role='button'
                            onClick={() => removeFromWatchList(movieObj)}
                            >
                          ❌
                       </div>
                       : 
                        <div 
                            className=' bg-gray-900/65 flex justify-center h-4 w-4 items-center m-3'
                            role='button'
                            onClick={() => addToWatchList(movieObj)}
                            >
                         😍
                       </div>}
                      
                    
                    </div>
  )
}

export default MovieCard
