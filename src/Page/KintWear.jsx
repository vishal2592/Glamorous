import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import NewRender from '../component/NewRender'

export const KintWear = () => {
    return (
        <>
            <div className='bg-[#E7E1B1] py-8'>
                <div className='flex justify-center items-center text-center gap-2'>
                    <Link to="/">Home </Link> /
                    <Link to="/kintwear">View All KintWear</Link>
                </div>
                <div className='pt-8 flex flex-col justify-center items-center text-center px-4 lg:px-20'>
                    <h1 className=' text-2xl font-bold'>VIEW ALL KINTWEAR</h1>
                    <p className='pt-6 leading-8 text-lg'>Stay cosy and layer up this season with our collection of versatile, on-trend knitwear. Choose from a range of fashion forward co-ords, figure-flattering dresses and comfy cardigans for the ultimate stylish look. Dress your knitwear up or down by pairing with your favourite jeans or throwing it on over a... </p>
                </div>
                {/* Main Layout */}
                <div className='flex lg:flex-row flex-col  px-2 lg:px-8 '>

                    {/* Sidebar */}
                    <div className='w-full lg:w-[300px] shrink-0'>
                        <Sidebar />
                    </div>

                    {/* Product Render Section */}
                    <div className='flex-1'>
                        <NewRender />
                    </div>

                </div>
            </div>
        </>
    )
}
