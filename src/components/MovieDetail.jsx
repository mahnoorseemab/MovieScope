import { useParams } from 'react-router-dom'
import BackButton from './BackButton'

const MovieDetail = ({ moviesArray }) => {
  const { id } = useParams()
  const specificMovie = moviesArray.find((movie) => (movie.id) === Number(id))

  return (
    <div>
      <div className='relative min-h-screen overflow-hidden'>
        <img className='absolute object-cover opacity-20 blur-sm inset-0 w-full' src={`https://image.tmdb.org/t/p/original${specificMovie.poster_path}`} alt="" />
        <div className='flex relative z-10'>
          <img className='h-screen p-3 rounded-2xl' src={`https://image.tmdb.org/t/p/original${specificMovie.poster_path}`} alt="" />
          <div className='flex flex-col'>
            <div className='flex items-baseline justify-between'>
              <span className='text-9xl md:text-5xl font-bold text-black m-4'>{specificMovie.title}</span>
              <div className='flex flex-col'>
                <div className='flex items-center justify-center w-14 h-14 rounded-full border-5 border-(--red) bg-black/10'>
                  <span className='text-black font-bold text-sm'>{Math.round(specificMovie.popularity)}</span>
                </div>
                <span className='text-sm text-(--red)'>Popularity</span>
              </div>
            </div>

            <span className='m-5'>{specificMovie.release_date}</span>

            <div className='flex items-center gap-4 ml-3'>
              <div className='flex items-center gap-1.5  bg-red-700/6  shadow-lg rounded-full px-4 py-1.5'>
                <span className='text-(--red) font-bold text-md'>{specificMovie.vote_average?.toFixed(1)}</span>
                <span className='text-gray-600 text-md'>/10</span>
              </div>
              <div className='flex items-center gap-1.5 bg-red-700/6 shadow-lg rounded-full px-4 py-1.5'>
                <span className='text-black font-semibold text-md'>{specificMovie.vote_count}</span>
                <span className='text-gray-600 text-md'>votes</span>
              </div>
            </div>

            <div className='mt-5 ml-3 max-w-5xl'>
              <h2 className='text-(--red) font-bold text-4xl mb-1'>Overview</h2>
              <p className='text-black text-lg leading-relaxed'>{specificMovie.overview}</p>
            </div>
            <div className='w-fit mt-auto mb-4'>
           <BackButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail