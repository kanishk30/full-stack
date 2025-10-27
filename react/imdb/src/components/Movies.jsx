import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import {MovieContext} from '../context/MovieContext'
import { useContext } from 'react';

import {useSelector, useDispatch} from 'react-redux'
import paginationSlice from '../redux/paginationSlice';
import movieSlice from '../redux/movieSlice';

import {fetchTrendingMovieMiddleware} from '../middlewares/fetchMovieMiddleware'

const paginationActions = paginationSlice.actions;
const movieActions = movieSlice.actions;

const Movies = () => {

    const {pageNo} = useSelector((state) => state.paginationState)
    const {movies, loading, error} = useSelector((state) => state.movieState)

    const dispatch = useDispatch()

    const {addToWatchList, removeFromWatchList, watchlist} = useContext(MovieContext)
    
      useEffect(() => {
       dispatch(fetchTrendingMovieMiddleware(pageNo));
      }, [pageNo])

    const handlePrev = () => {
      dispatch(paginationActions.handlePrev())
    }
    
    const handleNext = () => {
      dispatch(paginationActions.handleNext())
    }

    if(loading) {
      return <h3>Loading....</h3>
    }

    if(error) {
      return <h3>Something wrong!</h3>
    }

  return (
    <div>
        <h1 className='text-2xl font-bold text-center m-4'>Trending Movies</h1>
        <div
            className='flex justify-evenly flex-wrap gap-8'
        >
            {movies.map((movieObj) => (
                <>
                    <MovieCard 
                        movieObj={movieObj} 
                        addToWatchList={addToWatchList} 
                        removeFromWatchList={removeFromWatchList} 
                        watchlist={watchlist}
                    />
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
