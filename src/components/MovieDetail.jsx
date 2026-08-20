import { useParams } from 'react-router-dom'

const MovieDetail = ({ moviesArray }) => {
  const { id } = useParams()
  const specificMovie = moviesArray.find((movie) => (movie.id) === Number(id))

  return (
    <div>
      <div className='flex flex-colrelative min-h-screen'>
        <span><img className='absolute w-full object-contain overflow-hidden opacity-50' src={`https://image.tmdb.org/t/p/original${specificMovie.poster_path}`} alt="" /></span>
        <div>

          <span>{specificMovie.title}</span>
          <span>{specificMovie.popularity} </span>
          <span>  {specificMovie.release_date} </span>
          <span> {specificMovie.overview}</span>
          <span> {specificMovie.vote_average}</span>
          <span> {specificMovie.vote_count}</span>
        </div>
      </div>

    </div>
  )
}

export default MovieDetail