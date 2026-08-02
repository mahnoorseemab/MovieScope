import { useState } from 'react'
import HomePage from './components/HomePage'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [loadingState, setLoadingState] = useState(true)

  return (
    <>
      <HomePage/>
      <LoadingSpinner/>
    </>
  )
}

export default App
