import { useParams } from 'react-router-dom'

const MovieDetail = ({ moviesArray }) => {
  const { id } = useParams()
  const specificMovie = moviesArray.find((movie) => (movie.id) === Number(id))

  return (
    <div>
      <div className='relative min-h-screen overflow-hidden'>
        <img className='absolute object-cover opacity-70 blur-sm inset-0 w-full' src={`https://image.tmdb.org/t/p/original${specificMovie.poster_path}`} alt="" />

        <div className='flex'>
          <img className='h-screen p-6' src={`https://image.tmdb.org/t/p/original${specificMovie.poster_path}`} alt="" />
          <span>{specificMovie.title}</span>
          <span>{specificMovie.popularity}</span>
          <span>{specificMovie.release_date}</span>
          <span>{specificMovie.overview}</span>
          <span>{specificMovie.vote_average}</span>
          <span>{specificMovie.vote_count}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail