import React, { useEffect, useState } from 'react'

const Movies = () => {

    const [movies, setMovies] = useState([
        {
            url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title: "Movie 1"
        },
        {
            url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title: "Movie 2"
        },
        {
            url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title: "Movie 3"
        },
        {
            url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title: "Movie 4"
        },
        {
            url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title: "Movie 5"
        },
    ])



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
                         flex items-end justify-between 
                         hover:cursor-pointer hover:scale-105 duration-300'
                    style={{
                        backgroundImage: `url(${movieObj.url})`
                    }}>
                       <div className='text-white w-full text-xl bg-gray-900/65 p-3'>
                        {movieObj.title}
                       </div>
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default Movies
