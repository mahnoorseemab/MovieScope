import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-(--red) w-[100vw] h-[20vh] justify-around items-center'>
      <div className='font-bold text-2xl'>
        MovieScope
      </div>
      <div className='flex gap-15 '>
        <span className='text-xl hover:text-(--white) hover:cursor-pointer'>
          <Link to="/">Home</Link>
        </span>
        <span className='text-xl hover:text-(--white) hover:cursor-pointer'>
          <Link to="/favourites">Favourites</Link>
        </span>
      </div>
    </div>
  )
}

export default Navbar