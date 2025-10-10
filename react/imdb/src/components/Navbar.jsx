import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/imdb-logo.png'

const Navbar = () => {
  return (
    <div className='flex space-x-8 items-center pl-3'>
      <Link to='/'>
        <img src={Logo} height={100} width={100} alt='IMDb logo' />
      </Link>
      <Link to={'/'} className='text-blue-500 font-bold text-2xl'>Home</Link>
      <Link to={'/watchlist'} className='text-blue-500 font-bold text-2xl'>Watchlist</Link>
    </div>
  )
}

export default Navbar
