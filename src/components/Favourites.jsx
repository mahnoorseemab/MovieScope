import FavouritesCard from './FavouritesCard'
import BackButton from './BackButton'

const Favourites = ({ favourites }) => {
  if (favourites.length == 0) {
    return (
      <div className='flex flex-col justify-center items-center h-[100vh] gap-3'>
        <span className='text-6xl'>🎬</span>
        <h2 className='text-2xl font-bold tracking-wide text-black'>
          Nothing here yet — add a movie you love
        </h2>
        <p className='text-sm text-gray-500'>
          Go back to home and add start your watchlist
        </p>
        <BackButton />
      </div>
    )
  } else {

    return (
      <div className="flex flex-col p-4">
        <div className='flex flex-wrap'>
          {favourites.map((favourite) => <FavouritesCard favourite={favourite} key={favourite.id} />)}
        </div>
        <div className='w-fit mt-3'>
          <BackButton />
        </div>
      </div>
    )
  }
}

export default Favourites