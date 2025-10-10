import React from 'react'

const Banner = () => {
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
