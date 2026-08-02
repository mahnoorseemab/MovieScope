import React from 'react'

const LoadingSpinner = () => {
  return (
      <div>
        <div className="w-12 h-12 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin"></div>
        <div>Loading...</div>
      </div>
      
  )
}

export default LoadingSpinner