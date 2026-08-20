import { useNavigate } from 'react-router-dom'
import addToFavourites from '../assets/emptyheart.svg'

const MovieCard = ({ movie, handleAddToFavourites }) => {

  const navigate = useNavigate()

  return (
    <div>
      <div className="flex flex-col w-[12vw] h-[50vh]">
        <div className='hover:cursor-pointer' onClick={() => {
          navigate(`/moviedetail/${movie.id}`)
        }}>
          <div className="flex rounded-xl h-[34vh]"><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" /></div>
          <div className="font-bold hover:underline flex-wrap">{movie.title}</div>
        </div>
        <div>{movie.release_date}</div>
        <div className='flex gap-3'>
          <span>
            <img className='hover:cursor-pointer' title='Add to Favourites' src={addToFavourites} alt=""
              onClick={() => {
                handleAddToFavourites(movie)
                navigate('/favourites')
              }}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard