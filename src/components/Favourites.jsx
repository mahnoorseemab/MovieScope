import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

const Favourites = ({ favourites }) => {
  return (
    <div className="flex flex-col">
      <div>
        {favourites.map((favourite) => <MovieCard />)}
      </div>
      <span className="border-2 p-1 w-fit hover:cursor-pointer active:scale-95 transition-all">
        <Link to="/">Back to Home</Link>
      </span>
    </div>
  )
}

export default Favourites