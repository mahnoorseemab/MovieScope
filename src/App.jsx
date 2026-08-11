import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Favourites from './components/Favourites'
import MovieCard from './components/MovieCard'
import FavouritesCard from './components/FavouritesCard'
import FavouritesContext from './context/FavouritesContext'

function App() {
  const [favourites, setFavourites] = useState([])

  const handleAddToFavourites = (movie) => {
    setFavourites([...favourites, movie])
  }
  console.log(favourites)

 const handleRemoveFromFavourites =(key)=>{
   setFavourites(favourites.filter((removeMovie) => (removeMovie.id) == (key)))

 }

  return (
    <>
      <FavouritesContext.Provider value={{favourites, handleRemoveFromFavourites}}>
        <Routes>
          <Route path='/' element={<HomePage handleAddToFavourites={handleAddToFavourites} />} />
          <Route path='/favourites' element={<Favourites favourites={favourites} />} />
        </Routes>
      </FavouritesContext.Provider>
    </>
  )
}
export default App
