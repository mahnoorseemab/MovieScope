import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-(--red) w-[100vw] h-[20vh] justify-around items-center'>
      <div className='font-bold text-2xl'>
        MovieScope
      </div>
      <div className='flex gap-15 '>
        <span className='text-xl'>Home</span>
        <span className='text-xl'>Favourites</span>
      </div>
    </div>
  )
}

export default Navbar