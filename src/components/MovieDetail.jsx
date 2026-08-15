import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = ({ moviesArray }) => {
  const { id } = useParams()
  const specificMovie = moviesArray.find((movie) => (movie.id) === Number(id))

  return (
    <div>
      <div className='flex flex-col'>
        <span><img className='w-[11vw] h-[34vh]' src={`https://image.tmdb.org/t/p/original${specificMovie.poster_path}`} alt="" /></span>
        <span> Movie Title: {specificMovie.title}</span>
        <span> Release Date: {specificMovie.release_date} </span>
      </div>
    </div>
  )
}


export default MovieDetail