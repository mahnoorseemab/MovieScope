import React, { useEffectEvent } from 'react'
import { useEffect } from 'react'

const MovieCard = () => {
  
   useEffect(() => {
     async function getPopularMovies(){
      const popMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      const popularMovies = await popMovies.json()
      console.log(popularMovies)
  }
   
  getPopularMovies()
   }, [])

  return (
    <div className='w-[100vw] border-2 h-[35vh]'></div>
  )
}

export default MovieCard