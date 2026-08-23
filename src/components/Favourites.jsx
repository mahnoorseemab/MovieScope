import FavouritesCard from './FavouritesCard'
import BackButton from './BackButton'

const Favourites = ({ favourites }) => {
  
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

export default Favourites