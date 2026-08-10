import React from 'react'

const FavouritesCard = ({ favourite, key }) => {
    return (
        <div className="flex flex-col gap-3  w-[20vw] h-[50vh]">
            <div className=" flex gap-3 rounded-xl w-[11vw] h-[34vh]"><img src={`https://image.tmdb.org/t/p/original${favourite.poster_path}`} alt="" srcSet="" /></div>
            <div className="w-[11vw] font-bold hover:cursor-pointer hover:text-underline">{favourite.title}</div>
            <div className='w-[11vw]'>Release Date: {favourite.release_date}</div>
        </div>
    )
}
export default FavouritesCard