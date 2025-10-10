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
    const [pageNo, setPageNo] = useState(1);
    
    const handlePrev = () => {
        if(pageNo === 1) return;
        setPageNo(pageNo - 1)
    }

    const handleNext = () => {
        setPageNo(pageNo + 1)
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
