import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = ({ moviesArray }) => {
  const { id } = useParams()
  const specificMovie = moviesArray.find((movie) => (movie.id) === Number(id))

  return (
    <div className='border-2 p-4 m-2'>
      <div>
        Movie Title: {specificMovie.title}
      </div>
    </div>
  )
}

export default MovieDetail