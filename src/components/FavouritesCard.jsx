import removeFromFavourites from '../assets/red-heart.svg'
import { useContext } from 'react'
import FavouritesContext from '../context/FavouritesContext'

const FavouritesCard = ({ favourite }) => {
    const { handleRemoveFromFavourites } = useContext(FavouritesContext)

    return (
        <div>
            <div className="flex flex-col w-[12vw] min-w-[160px] gap-2 rounded-xl p-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 bg-white">
                <div className="flex rounded-xl overflow-hidden aspect-[2/3]">
                    <img
                        className='w-full h-full object-cover'
                        src={`https://image.tmdb.org/t/p/original${favourite.poster_path}`}
                        alt={favourite.title}
                    />
                </div>
                <div className="font-semibold text-sm hover:underline hover:cursor-pointer line-clamp-2 leading-snug">
                    {favourite.title}
                </div>
                <div className='text-xs text-gray-500'>{favourite.release_date}</div>
                <div>
                    <img
                        src={removeFromFavourites}
                        className='hover:cursor-pointer w-5 h-5'
                        title='Remove from Favourites'
                        alt="Remove from favourites"
                        onClick={() => {
                            handleRemoveFromFavourites(favourite.id)

                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default FavouritesCard