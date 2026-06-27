import React from 'react'
import Heading from '../component/Heading'
import Sidebar from '../component/Sidebar'
import Collection from '../component/Collection'
import { Mini } from '../store/Mini'
import image1 from '../assets/images/mini/bannermini.png'

const MiniDress = () => {
    return (
        <div className='bg-[#E7E1B1]'>
            <div>
                <Heading
                    currentPage="MINI DRESS"
                    currentPath="/minidress"
                    title="MINI DRESSES"
                    description="Shop our collection of mini dresses to find the perfect on-trend piece for any occasion. Choose from ditsy prints, tweed, sequins and more! With our range of mini dresses, the possibilities are endless. Layer up with a turtleneck and knee-high boots or embrace the mini with bare legs and platform heels. From everyday wear to nights out, we’ve got you covered."
                />
            </div>
            {/* Main Layout Section */}
            <div className='flex flex-col lg:flex-row px-2 lg:px-6 py-6 gap-4'>
            {/* Left Side Content */}
                <div className='w-full lg:w-[300px] shrink-0'>
                    <Sidebar />
                </div>
            {/* Product Render Section */}
            <div className='flex-1 bg-[#FBF5DD]'>
                <Collection />
            </div>
            </div>
        </div>
    )
}

export default MiniDress