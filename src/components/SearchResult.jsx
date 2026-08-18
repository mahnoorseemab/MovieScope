import SearchedDataCard from './SearchedDataCard'
import { Link } from 'react-router-dom'
import BackButton from './BackButton'

const SearchResult = ({ searchedData }) => {
    if (searchedData.length == 0) {
        return (
            <div className='flex flex-col justify-center items-center h-[100vh] gap-3'>
                <span className='text-6xl'>🎬</span>
                <h2 className='text-2xl font-bold tracking-wide text-black'>
                    No Results Found
                </h2>
                <p className='text-sm text-gray-500'>
                    Try searching for something else
                </p>
                <BackButton />
            </div>
        )
    } else {
        return (
            <div>
                <div className='border-2'>
                    {searchedData.map((data) => <SearchedDataCard data={data} key={data.id} />)}
                </div>
                <BackButton />
            </div>
        )

    }
}

export default SearchResult