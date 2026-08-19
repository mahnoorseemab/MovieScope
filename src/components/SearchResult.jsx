import SearchedDataCard from './SearchedDataCard'
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
                    Go back to home and try searching for something else
                </p>
                <BackButton />
            </div>
        )
    } else {
        return (
            <div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6'>
                    {searchedData.map((data) => <SearchedDataCard data={data} key={data.id} />)}
                </div>
                <div className='flex justify-center p-6'>
                    <BackButton />
                </div>
            </div>
        )

    }
}

export default SearchResult