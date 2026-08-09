import React from 'react'
import { Link } from 'react-router-dom'
import FavouritesCard from './FavouritesCard'

const Favourites = ({ favourites }) => {
  return (
    <div className="flex flex-col">
      <div className='border-2'>
        {favourites.map((favourite) => <FavouritesCard favourite={favourite}/>)}
      </div>
    </div>
  )
}

export default Favourites