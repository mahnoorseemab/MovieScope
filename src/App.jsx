import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Favourites from './components/Favourites'
import MovieCard from './components/MovieCard'
import FavouritesCard from './components/FavouritesCard'

function App() {
  const [favourites, setFavourites] = useState([])

  const handleAddToFavourites = (movie) => {
    setFavourites([...favourites, movie])
  }
  console.log(favourites)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage handleAddToFavourites={handleAddToFavourites} />} />
        <Route path='/favourites' element={<Favourites favourites={favourites} />} />
      </Routes>
    </>
  )
}
export default App
