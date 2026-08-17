import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-(--red) w-[100vw] h-[20vh] justify-around items-center'>
      <div className='flex flex-col text-3xl font-extrabold tracking-widest uppercase text-black' style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
        <span className='text-black'>Movie</span>
        <span className='text-black-600'>Scope</span>
      </div >
      <div className='flex gap-15 '>
        <span className='text-xl hover:text-(--white) hover:cursor-pointer'>
          <Link to="/">Home</Link>
        </span>
        <span className='text-xl hover:text-(--white) hover:cursor-pointer'>
          <Link to="/favourites">Favourites</Link>
        </span>
      </div>
    </div >
  )
}

export default Navbar