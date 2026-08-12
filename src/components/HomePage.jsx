import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'
import MovieCard from './MovieCard'

const HomePage = ({ handleAddToFavourites, loadingState, moviesArray }) => {
    const [searchInput, setSearchInput] = useState("")

    if (loadingState == true) {
        return (
            <LoadingSpinner />
        )
    }
    else {
        return (
            <div className='flex flex-col gap-10'>
                <Navbar />
                <div className='flex justify-center'>
                    <input
                        className='p-3 w-[40vw] rounded-2xl bg-white/10 backdrop-blur-md border border-[#E63946]/40 focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/30 transition-all duration-300'
                        type="text"
                        placeholder='Search your favourite movie here!'
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value)
                        }}
                        onKeyDown={
                            (e) => {
                                if (e.key === "Enter") {
                                    async function onhandlekey() {
                                        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
                                        const data = await res.json()
                                        console.log(data)
                                    }
                                    onhandlekey()
                                }
                            }
                        }
                    />
                </div>

                <div className='flex justify-center font-bold text-3xl'>Popular Shows</div>
                <div className='flex gap-2 w-[100vw]'>
                    {moviesArray.map((movie) => <MovieCard key={movie.id} movie={movie} handleAddToFavourites={handleAddToFavourites} />)}
                </div>
            </div>
        )
    }
}

export default HomePage

