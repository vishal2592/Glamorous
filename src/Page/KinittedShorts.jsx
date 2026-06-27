import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import { Short } from '../store/Short'
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";





const KinittedShorts = () => {

    const navigate = useNavigate();

  return (
    <div className='bg-[#E7E1B1]'>
        <div className='flex justify-center items-center gap-2 pt-8'>
            <Link to="/">Home</Link> /
            <Link to="/short">Kinitted Short</Link>
        </div>
        <h1 className='flex justify-center items-center text-2xl font-bold pt-4'>KINITTED SHORTS</h1>
        <p className='px-20 flex items-center text-center leading-8 pt-4'>Choose comfort and style with our Knitted Shorts! Made from high-quality materials, our selection of knitted shorts will keep you both cozy and fashionable. Perfect for a casual day out or lounging at home.</p>

        {/* Main Layout Section */}
        <div className='flex flex-col lg:flex-row gap-4 px-2 lg:px-6 py-6'>
            {/* Left Side Content */}
            <div className='w-full lg:w-[300px] shrink-0'>
                    <Sidebar />
            </div>
            {/* Right Side Content */}
            <div className='flex-1 bg-[#FBF5DD]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
                    {
                        Short.map((item)=>(
                            <div key={item.id} 
                            className='bg-white/50 group relative rounded-lg shadow-sm'>
                                <img
                                src={item.image}
                                alt='shortimage'
                                onClick={()=>navigate(`/product/${item.id}`)}
                                className='w-full h-[300px] object-center rounded-md cursor-pointer'
                                />
                                <div className='absolute top-4 right-2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-x-10 
                                group-hover:translate-x-0 transition-all duration-500'>
                                <button className='w-10 h-10 bg-white text-black flex justify-center items-center
                                rounded-full shadow-sm transition-all duration-300'>
                                <FaRegHeart />
                                </button>
                                 <button className='w-10 h-10 bg-white text-black flex justify-center items-center
                                rounded-full shadow-sm transition-all duration-300'>
                               <FiEye />
                                </button>
                                </div> 
                                <div className='px-2 '>
                                    <h1 className='text-md font-bold tracking-wide line-clamp-1'>
                                        {item.heading}
                                    </h1>
                                    <p className='text-md  tracking-wide line-clamp-1'>
                                        {item.description}
                                    </p>
                                </div>
                                <div className='flex gap-2 px-2'>
                                    <p className='flex items-center text-lg font-semibold text-blue-700'>
                                    <MdCurrencyRupee />
                                        {item.price}
                                    </p>
                                    <p className='flex items-center line-through text-md font-semibold text-red-600  '>
                                    <MdCurrencyRupee />
                                        {item.oldprice}
                                    </p>
                                    <p className='text-[#0D530E] text-lg font-semibold'>
                                        {item.discount}
                                    </p>
                                </div>
                                <p className='px-2 text-gray-500'>
                                    {item.comment}
                                </p>
                                 <div className='px-2'>

                            <ul className='flex items-center gap-2 py-2 flex-wrap text-sm opacity-0 group-hover:opacity-100 transition-all duration-500'>

                                {item.sizes.map((size, index) => (
                                    <li
                                        key={index}
                                        className='bg-slate-200 rounded-full px-2 py-[4px] cursor-pointer hover:bg-black hover:text-white'
                                    >
                                        {size}
                                    </li>
                                ))}
                            </ul>
                        </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default KinittedShorts