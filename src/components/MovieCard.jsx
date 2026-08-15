import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import addToFavourites from '../assets/emptyheart.svg'
import Favourites from './Favourites.jsx'
import FavouritesCard from './FavouritesCard.jsx'
import FavouritesContext from '../context/FavouritesContext.jsx'

const MovieCard = ({ key, movie, handleAddToFavourites }) => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-3  w-[20vw] h-[50vh]">
      <div className='hover:cursor-pointer' onClick={() => {
        navigate(`/moviedetail/${movie.id}`)
      }}>
        <div className=" flex gap-3 rounded-xl w-[11vw] h-[34vh]"><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" srcSet="" /></div>
        <div className="w-[11vw] font-bold hover:underline">{movie.title}</div>
      </div>

      <div className='w-[11vw]'>Release Date: {movie.release_date}</div>
      <div className='flex gap-3'>
        <span>
          <img className='hover:cursor-pointer' title='Add to Favourites' src={addToFavourites} alt=""
            onClick={(key) => {
              handleAddToFavourites(movie)
              navigate('/favourites')
            }
            }
          />
        </span>
      </div>
    </div>
  )
}

export default MovieCard