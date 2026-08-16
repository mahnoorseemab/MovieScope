import SearchedDataCard from './SearchedDataCard'
import { Link } from 'react-router-dom'

const SearchResult = ({ searchedData }) => {
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
export default SearchResult