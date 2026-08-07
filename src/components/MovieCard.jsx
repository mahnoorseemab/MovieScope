import { useState } from 'react'
import addToFavourites from '../assets/emptyheart.svg'

const MovieCard = ({ key, movies }) => {
  return (
    <div className="flex flex-col gap-3  w-[20vw] h-[50vh]">
      <div className=" flex gap-3 rounded-xl w-[11vw] h-[34vh]"><img src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} alt="" srcSet="" /></div>
      <div className="w-[11vw] font-bold">{movies.title}</div>
      <div className='w-[11vw]'>Release Date: {movies.release_date}</div>
      <div className='flex gap-3'>
        <span>
          <img src={addToFavourites} alt="" />
        </span>
      </div>
    </div>
  )
}

export default MovieCard