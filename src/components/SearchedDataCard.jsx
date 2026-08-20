const SearchedDataCard = ({ data }) => {
    return (
        <div className="flex flex-col gap-1">
            <div className="w-full aspect-[2/3] rounded-xl overflow-hidden bg-gray-200">
                {data.poster_path ? (
                    <img
                        className="w-full h-full object-cover"
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white gap-2">
                        <span className="text-3xl">🎬</span>
                        <span className="text-xs text-center px-2 text-gray-300">No Poster Available</span>
                    </div>
                )}
            </div>
            <span className="text-lg font-medium text-black truncate">{data.title}</span>
            <span className="text-sm text-gray-800">{data.release_date}</span>
        </div>
    )
}

export default SearchedDataCard