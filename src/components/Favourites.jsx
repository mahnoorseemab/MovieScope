import React from 'react'
import {Link} from 'react-router-dom'
const Favourites = () => {
  return (
    <div className="flex flex-col">
      <span>Favourites</span>
      <span className="border-2 p-1 w-fit hover:cursor-pointer active:scale-95 transition-all">
        <Link to="/">Back to Home</Link>
      </span>
    </div>

  )
}

export default Favourites