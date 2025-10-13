import React, {useEffect, useState} from 'react'
import {BASE_IMG_URL} from '../util'

const Banner = () => {

  const [bannerMovie, setBannerMovie] = useState("Titanic")
  const [bannerMovieImg, setBannerMovieImg] = useState("https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68")
  
  useEffect(() => {
    async function fetchTrendingMovie() {
      fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=e278e3c498ab14e0469bf6d86da17045")
      .then(res => res.json())
      .then(data => {
        const firstMovie = data?.results[0];
        setBannerMovie(firstMovie.original_title);
        setBannerMovieImg(`${BASE_IMG_URL}${firstMovie.backdrop_path}`)
      })
    }
    fetchTrendingMovie()
  }, [])

  return (
    <div 
    className='h-[20vh] md:h-[65vh] bg-cover bg-center  flex justify-center  items-end '
    style={{
        backgroundImage: `url(${bannerMovieImg})`
    }}>
        <div className='text-white text-2xl text-center font-bold mb-4'>
            {bannerMovie}
        </div>
    </div>
  )
}

export default Banner
