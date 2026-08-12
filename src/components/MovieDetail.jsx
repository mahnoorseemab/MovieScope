import React from 'react'

const MovieDetail = ({ moviesArray }) => {
  return (
    <div className='border-2 p-4 m-2'>
      <div>
        Movie Title: {moviesArray.title}
      </div>
    </div>
  )
}

export default MovieDetail