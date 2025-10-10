import React, {useEffect, useState} from 'react'

const Banner = () => {
  
  useEffect(() => {

    async function fetchTrendingMovie() {
      fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=e278e3c498ab14e0469bf6d86da17045")
      .then(res => res.json())
      .then(data => {console.log("data",data)})
    }

    fetchTrendingMovie()



  }, [])

  return (
    <div 
    className='h-[20vh] md:h-[65vh] bg-cover bg-center  flex justify-center  items-end '
    style={{
        backgroundImage: `url(https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)`
    }}>
        <div className='text-white text-2xl text-center font-bold mb-4'>
            Titanic
        </div>
    </div>
  )
}

export default Banner
