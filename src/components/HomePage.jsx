import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const HomePage = () => {
    const [searchInput, setSearchInput] = useState("")

    return (
        <div className='flex flex-col gap-5'>
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
        </div>
    )
}


export default HomePage

