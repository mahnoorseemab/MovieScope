import { useParams } from 'react-router-dom'

const MovieDetail = ({ moviesArray }) => {
  const { id } = useParams()
  const specificMovie = moviesArray.find((movie) => (movie.id) === Number(id))

  return (
    <div>
      <div className='relative min-h-screen overflow-hidden'>
        <img className='absolute object-cover opacity-20 blur-sm inset-0 w-full' src={`https://image.tmdb.org/t/p/original${specificMovie.poster_path}`} alt="" />

        <div className='flex'>
          <img className='h-screen p-3 rounded-2xl' src={`https://image.tmdb.org/t/p/original${specificMovie.poster_path}`} alt="" />
          <div className='flex flex-col'>
            <span className='text-3xl md:text-4xl font-bold text-black m-2'>{specificMovie.title}</span>
            <span className='m-2'>{specificMovie.release_date}</span>
            <div className='mt-2 max-w-3xl'>
              <h2 className='text-(--red) font-bold text-lg mb-1'>Overview</h2>
              <p className='text-black text-sm leading-relaxed'>{specificMovie.overview}</p>
            </div>
            <span>{specificMovie.popularity}</span>
            <span>{specificMovie.vote_average}</span>
            <span>{specificMovie.vote_count}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail