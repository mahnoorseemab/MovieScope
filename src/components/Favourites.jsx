import { Link} from 'react-router-dom'
import FavouritesCard from './FavouritesCard'


const Favourites = ({ favourites }) => {

  return (
    <div className="flex flex-col p-4">
      <div className='flex border-2'>
        {favourites.map((favourite) => <FavouritesCard favourite={favourite} key={favourite.id} />)}
      </div>
      <div className='border-2 w-fit active:scale-95 transition-all hover:cursor-pointer'>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}

export default Favourites