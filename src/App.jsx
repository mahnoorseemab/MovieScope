import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Favourites from './components/Favourites'
import FavouritesContext from './context/FavouritesContext'
import MovieDetail from './components/MovieDetail'
import { useEffect } from 'react'

function App() {
  const [loadingState, setLoadingState] = useState(true)
  const [moviesArray, setMoviesArray] = useState([])
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    async function getPopularMovies() {
      const popMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      const popularMovies = await popMovies.json()
      setMoviesArray(popularMovies.results)
      setLoadingState(false)
      console.log(popularMovies)
    }
    getPopularMovies()
  }, [])


  const handleAddToFavourites = (movie) => {
    setFavourites([...favourites, movie])
  }

  const handleRemoveFromFavourites = (id) => {
    setFavourites(favourites.filter((removeMovie) => (removeMovie.id) !== (id)))
  }

  const handleMovieDetail = (id) => {
    setFavourites(favourites.find((specificMovie) => (specificMovie.id) === (id)))
  }

  return (
    <>
      <FavouritesContext.Provider value={{ favourites, handleRemoveFromFavourites, handleMovieDetail }}>
        <Routes>
          <Route path='/' element={<HomePage handleAddToFavourites={handleAddToFavourites} loadingState={loadingState} moviesArray={moviesArray} />} />
          <Route path='/favourites' element={<Favourites favourites={favourites} />} />
          <Route path='/moviedetail' element={<MovieDetail />} />
        </Routes>
      </FavouritesContext.Provider>
    </>
  )
}
export default App
