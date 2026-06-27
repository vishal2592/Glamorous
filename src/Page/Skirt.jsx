import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import KinittedSkirt from '../component/KinittedSkirt'

const Skirt = () => {
  return (
    <div className='bg-[#E7E1B1]'>
    <div className='flex justify-center items-center gap-4 pt-8'>
        <Link to="/">Home</Link> /
        <Link to="/skirt">Kinitted Skirt</Link>
    </div>
    <h1 className='text-2xl font-bold flex justify-center items-center pt-4'>KINITTED SKIRT</h1>
    <p className='px-20 pt-4 leading-8 hidden lg:flex justify-center items-center text-center'>Add some charm to your wardrobe with our Knitted Skirts Collection. These stylish skirts are made with high-quality knit fabric and are perfect for any occasion. Mix and match with our matching sets for a fun, unique look. Knitwear has never looked so chic!</p>

    {/* Main Layout Section */}
    <div className='flex lg:flex-row flex-col gap-4 px-2 lg:px-8 py-6'>
        {/* Left side Content Section */}
        <div className='w-full lg:w-[300px] shrink-0'>
            <Sidebar />
        </div>
        {/* Right Side product render section */}
        <div className='bg-[#FBF5DD] flex-1 p-4'>
            <KinittedSkirt />
        </div>
    </div>
    </div>
  )
}

export default Skirt