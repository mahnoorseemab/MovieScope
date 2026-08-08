import React from 'react'
import { Link } from 'react-router-dom'


const Favourites = ({ favourites }) => {
  return (
    <div className="flex flex-col">
      <div>Titles:
        {favourites.map((favourite) => (favourite.title))}
      </div>
      <span className="border-2 p-1 w-fit hover:cursor-pointer active:scale-95 transition-all">
        <Link to="/">Back to Home</Link>
      </span>
    </div>
  )
}

export default Favourites