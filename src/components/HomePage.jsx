import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import LoadingSpinner from './LoadingSpinner'
import MovieCard from './MovieCard'
import searchIcon from '../assets/search_icon.svg'

const HomePage = ({ handleAddToFavourites, loadingState, moviesArray, setSearchedData }) => {
    const [searchInput, setSearchInput] = useState("")
    const navigate = useNavigate()

    async function handleSearch() {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
        const data = await res.json()
        console.log(data)
        setSearchedData(data.results)
        navigate('/SearchResult')
    }
    if (loadingState == true) {
        return (
            <LoadingSpinner />
        )}
    else {
        return (
            <div className='flex flex-col gap-10'>
                <Navbar />
                <div className='flex justify-center'>
                    <div className='flex relative w-[fit]'>
                        <input
                            className='p-3 w-[40vw] rounded-2xl bg-white/10 backdrop-blur-md border border-[#E63946]/40 focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/30 transition-all duration-300'
                            type="text"
                            placeholder='Search movies here!'
                            value={searchInput}
                            onChange={(e) => {
                                setSearchInput(e.target.value)
                            }}
                            onKeyDown={
                                (e) => {
                                    if (e.key === "Enter") {
                                        handleSearch()
                                    }
                                }
                            }
                        />
                        <img src={searchIcon} className='w-7 h-7  absolute right-3 hover:cursor-pointer m-2.5' alt=""
                            onClick={() => {
                                handleSearch()
                            }} />
                    </div>
                </div>

                <div className='flex justify-center gap-2 font-extrabold text-4xl tracking-widest uppercase'>
                    <span className='text-black'>Popular </span>
                    <span className='text-[#E63946]'>Shows</span>
                </div>
                <div className='flex w-full'>
                    {moviesArray.map((movie) => <MovieCard key={movie.id} movie={movie} handleAddToFavourites={handleAddToFavourites} />)}
                </div>
            </div>
        )
    }
}

export default HomePage



