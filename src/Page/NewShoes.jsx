import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import NewRender from '../component/NewRender'

const NewShoes = () => {
    return (
        <>
            <div className='bg-[#E7E1B1] py-8 min-h-screen'>

                {/* Breadcrumb */}
                <div className='flex justify-center items-center text-center pt-8 gap-1'>
                    <Link to="/">Home</Link> /
                    <Link to="/newshoes">New In Bags & Shoes</Link>
                </div>

                {/* Heading */}
                <h1 className='pt-6 text-2xl flex justify-center items-center text-center font-bold'>
                    New In Bags & Shoes
                </h1>

                {/* Main Layout */}
                <div className='flex lg:flex-row flex-col  px-2 lg:px-8 pt-4 '>

                    {/* Sidebar */}
                    <div className='w-full lg:w-[300px] shrink-0'>
                        <Sidebar />
                    </div>

                    {/* Product Render Section */}
                    <div className='flex-1 px-2'>
                        <NewRender />
                    </div>

                </div>

            </div>
        </>
    )
}

export default NewShoes