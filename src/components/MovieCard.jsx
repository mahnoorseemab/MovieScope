import { useState } from 'react'

const MovieCard = ({ key, movies }) => {
  return (
    <div className="flex flex-col gap-3 border-2 w-[11vw] h-[50vh]">
      <div className="border-2 w-[11vw] h-[34vh]"><img src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} alt="" srcSet="" /></div>
      <div className="border-2 w-[11vw]">{movies.title}</div>
      <div className='border-2 w-[11vw]'>Release Date: {movies.release_date}</div>
    </div>
  )
}

export default MovieCard