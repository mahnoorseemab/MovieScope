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
      <Favourites favourites={favourites} />
      <Routes>
        <Route path='/' element={<HomePage handleAddToFavourites={handleAddToFavourites} />} />
        <Route path='/favouritesCard' element={<FavouritesCard />} />
      </Routes>
    </>
  )
}

export default App
