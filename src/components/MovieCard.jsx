import { useNavigate } from 'react-router-dom'
import addToFavourites from '../assets/emptyheart.svg'
import removeFromFavourites from '../assets/red-heart.svg'
import { useContext } from 'react'
import FavouritesContext from '../context/FavouritesContext'

const MovieCard = ({ movie, handleAddToFavourites }) => {
  const navigate = useNavigate()
  const { favourites, handleRemoveFromFavourites } = useContext(FavouritesContext)
  const favCard = favourites.some((fav) => (fav.id) === (movie.id))

  return (
    <div>
      <div className="flex flex-col w-[12vw] min-w-[160px] gap-2 rounded-xl p-2 shadow-md hover:shadow-lg
            hover:scale-95 transition-all duration-200 bg-white">
        <div className='hover:cursor-pointer' onClick={() => {
          navigate(`/moviedetail/${movie.id}`)
        }}>
          <div className="flex rounded-xl overflow-hidden aspect-[2/3]">
            <img
              className='w-full h-full object-cover'
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="font-semibold text-sm mt-2 hover:underline line-clamp-2 leading-snug">
            {movie.title}
          </div>
        </div>
        <div className='text-xs text-gray-500'>{movie.release_date}</div>
        <div className='flex gap-3'>
          <span>
            <img
              className='hover:cursor-pointer w-5 h-5'
              title={favCard ? "Remove from Favourites" : "Add to Favourites"}
              src={favCard ? removeFromFavourites : addToFavourites}
              alt="Add to favourites"
              onClick={() => {
                favCard ? handleRemoveFromFavourites(movie.id) : handleAddToFavourites(movie)
                favCard ? navigate('/') : navigate('/favourites')
              }}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard