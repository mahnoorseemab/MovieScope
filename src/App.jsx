import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Favourites from './components/Favourites'
import FavouritesContext from './context/FavouritesContext'

function App() {
  const [favourites, setFavourites] = useState([])

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
          <Route path='/' element={<HomePage handleAddToFavourites={handleAddToFavourites} />} />
          <Route path='/favourites' element={<Favourites favourites={favourites} />} />
        </Routes>
      </FavouritesContext.Provider>
    </>
  )
}
export default App
