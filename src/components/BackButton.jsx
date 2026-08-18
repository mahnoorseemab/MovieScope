import { Link } from "react-router-dom"

const BackButton = () => {
    return (
        <Link to='/' className='inline-block border-2 border-[#E63946] text-[#E63946] px-6 py-2 rounded-lg font-medium tracking-wide hover:bg-[#E63946] hover:text-white active:scale-95 transition-all duration-300'>
            Back to Home
        </Link>


    )
}

export default BackButton