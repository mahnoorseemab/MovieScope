import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Favourites from './components/Favourites'
import FavouritesContext from './context/FavouritesContext'
import MovieDetail from './components/MovieDetail'
import SearchResult from './components/SearchResult'
import MovieCard from './components/MovieCard'

function App() {
  const [loadingState, setLoadingState] = useState(true)
  const [moviesArray, setMoviesArray] = useState([])
  const [favourites, setFavourites] = useState(handleFavouritesArray)
  const [searchedData, setSearchedData] = useState([])

  useEffect(() => {
    async function getPopularMovies() {
      const popMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      const popularMovies = await popMovies.json()
      setMoviesArray(popularMovies.results)
      setLoadingState(false)
    }
    getPopularMovies()
  }, [])

  useEffect(() => {
    const saveFavorites = JSON.stringify(favourites)
    localStorage.setItem("favouritesArray", saveFavorites)
  }, [favourites])

  function handleFavouritesArray() {
    const stored = localStorage.getItem("favouritesArray")
    const storedData = JSON.parse(stored)
    if ((storedData) == null) {
      return []
    } else {
      return storedData
    }
  }

  const handleAddToFavourites = (movie) => {
    setFavourites([...favourites, movie])
  }

  const handleRemoveFromFavourites = (id) => {
    setFavourites(favourites.filter((removeMovie) => (removeMovie.id) !== (id)))
  }

  return (
    <>
      <FavouritesContext.Provider value={{ favourites, handleRemoveFromFavourites }}>
        <Routes>
          <Route path='/' element={<HomePage handleAddToFavourites={handleAddToFavourites} loadingState={loadingState} moviesArray={moviesArray} setSearchedData={setSearchedData} />} />
          <Route path='/favourites' element={<Favourites favourites={favourites} />} />
          <Route path='/moviedetail/:id' element={<MovieDetail moviesArray={moviesArray} />} />
          <Route path='/searchresult' element={<SearchResult searchedData={searchedData} />} />
          <Route path='/movieCard' element={<MovieCard />} />
        </Routes>
      </FavouritesContext.Provider>
    </>
  )
}
export default App
