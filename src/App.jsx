import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Favourites from './components/Favourites'

function App() {
const [addToFavourites, setAddToFavourites] = useState([])
const [removeFromFavourites, setRemoveFromFavourites] = useState("")

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </>
  )
}

export default App
