import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import FavouritesCard from './FavouritesCard'
import FavouritesContext from '../context/FavouritesContext'

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