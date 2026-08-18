import SearchedDataCard from './SearchedDataCard'
import { Link } from 'react-router-dom'

const SearchResult = ({ searchedData }) => {
    if (searchedData.length == 0) {
        return (
            <div>
                No result found
            </div>
        )
    } else {
        return (
            <div>
                <div className='border-2'>
                    {searchedData.map((data) => <SearchedDataCard data={data} key={data.id} />)}
                </div>
                <div className='border-2 w-fit active:scale-95 transition-all hover:cursor-pointer'>
                    <Link to="/">Back to Home</Link>
                </div>
            </div>
        )
    }
}

export default SearchResult