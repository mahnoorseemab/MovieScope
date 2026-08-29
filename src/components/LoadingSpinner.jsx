
const LoadingSpinner = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 border-4 border-gray-200/50 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-red-500 border-r-red-500 rounded-full animate-spin shadow-lg"></div>
        </div>
        <div className="text-gray-600 text-sm font-medium tracking-wider">
          LOADING
        </div>
        <div>Please wait...</div>
      </div>

  )
}

export default LoadingSpinner