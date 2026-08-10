import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FavouritesCard from './FavouritesCard'

const Favourites = ({ favourites }) => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col">
      <div className='border-2 flex'>
        {favourites.map((favourite) => <FavouritesCard favourite={favourite} key={favourite.id} /> )}
      </div>
    </div>
  )
}

export default Favourites