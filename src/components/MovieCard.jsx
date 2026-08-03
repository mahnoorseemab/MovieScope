import { useState } from 'react'

const MovieCard = ({ key, movies }) => {
  return (
    <div className="flex flex-col gap-2 border-2 w-[13vw] h-[55vh]">
      <div className="border-2 w-[13vw] h-[45vh]"><img src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} alt="" srcset="" /></div>
      <div className="border-2 w-[13vw]">Title: {movies.title}</div>
      <div className='border-2 w-[13vw]'>Release Date: {movies.release_date}</div>
    </div>
  )
}

export default MovieCard