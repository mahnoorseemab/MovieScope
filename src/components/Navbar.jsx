import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-(--red) w-full h-[14vh] sm:h-[16vh] md:h-[18vh] justify-around items-center flex-wrap md:flex-nowrap'>
      <div className='flex flex-col text-3xl font-extrabold tracking-widest uppercase text-black' style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
        <span className='text-black'>Movie</span>
        <span className='text-black'>Scope</span>
      </div >
      <div className='flex gap-10'>
        <Link to="/" className='text-xl font-medium tracking-wide text-black hover:text-white transition-colors duration-100'>
          Home
        </Link>
        <Link to="/favourites" className='text-xl font-medium tracking-wide text-black hover:text-white transition-colors duration-100'>
          Favourites
        </Link>
      </div>
    </div >
  )
}

export default Navbar