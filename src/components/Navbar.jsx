import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-(--red) w-[100vw] h-[20vh] justify-around items-center'>
      <div className='font-bold text-2xl'>
        MovieScope
      </div>
      <div className='flex gap-15 '>
        <span className='text-xl hover:text-(--white) hover:cursor-pointer'>Home</span>
        <span className='text-xl hover:text-(--white) hover:cursor-pointer'>Favourites</span>
      </div>
    </div>
  )
}

export default Navbar