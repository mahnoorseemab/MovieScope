const SearchedDataCard = ({ data }) => {
    return (
        <div className="flex">
            <span>Card:</span>
            <span>Movie Title: {data.title}</span>
        </div>
    )
}

export default SearchedDataCard