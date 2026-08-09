import { useState } from 'react'
import addToFavourites from '../assets/emptyheart.svg'
import { Link, Links } from 'react-router-dom'
import Favourites from './Favourites.jsx'

const MovieCard = ({ key, movie, handleAddToFavourites }) => {
  return (
    <div className="flex flex-col gap-3  w-[20vw] h-[50vh]">
      <div className=" flex gap-3 rounded-xl w-[11vw] h-[34vh]"><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" srcSet=""/></div>
      <div className="w-[11vw] font-bold hover:cursor-pointer hover:text-underline">{movie.title}</div>
      <div className='w-[11vw]'>Release Date: {movie.release_date}</div>
      <div className='flex gap-3'>
        <span>
          <img className='hover:cursor-pointer' src={addToFavourites} alt=""
            onClick={(key) => {
              handleAddToFavourites(movie)
            }
            }
          />
        </span>
      </div>
    </div>
  )
}

export default MovieCard