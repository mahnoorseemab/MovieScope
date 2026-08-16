import SearchedDataCard from './SearchedDataCard'

const SearchResult = ({ searchedData }) => {
    return (
        <div className='border-2'>
            {searchedData.map((data) => <SearchedDataCard data={data} key={data.id} />)}
            console.log(searchedData)
        </div>
    )

}
export default SearchResult