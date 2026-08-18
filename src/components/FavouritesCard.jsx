import removeFromFavourites from '../assets/red-heart.svg'
import { useContext } from 'react'
import FavouritesContext from '../context/FavouritesContext'

const FavouritesCard = ({ favourite }) => {
    const { handleRemoveFromFavourites } = useContext(FavouritesContext)
    return (
        <div>
            <div className="flex flex-col w-[20vw] h-[50vh]">
                <div className=" flex gap-3 rounded-xl w-[11vw] h-[34vh]"><img src={`https://image.tmdb.org/t/p/original${favourite.poster_path}`} alt="" srcSet="" /></div>
                <div className="w-[11vw] font-bold hover:cursor-pointer hover:text-underline">{favourite.title}</div>
                <div className='w-[11vw]'>Release Date: {favourite.release_date}</div>
                <div>
                    <img src={removeFromFavourites} className='hover:cursor-pointer' title='Remove from Favourites' alt=""
                        onClick={() => {
                            handleRemoveFromFavourites(favourite.id)
                            console.log(favourite.id)
                        }
                        }
                    />
                </div>
            </div>
        </div>

    )
}
export default FavouritesCard