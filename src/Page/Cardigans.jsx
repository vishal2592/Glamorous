import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import { CardigansImage } from '../store/CardigansImage'
import { MdCurrencyRupee } from "react-icons/md";
import image1 from '../assets/images/cardigans/cardiganbanner.png'
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const Cardigans = () => {

    const navigate = useNavigate();
    return (
        <div className='bg-[#E7E1B1]'>
            <div className='flex justify-center items-center gap-2 pt-8'>
                <Link to="/">Home</Link> /
                <Link to="/cardigans">Cardigans</Link>
            </div>
            <h1 className='flex justify-center items-center text-2xl font-bold pt-6'>CARDIGANS</h1>
            <p className='px-20 leading-8 pt-4 hidden lg:flex justify-center items-center text-center'>Add one of our on-trend cardigans to your look for the ultimate cosy vibe. Whether you’re looking for a statement piece featuring a fun print, or you’re in need of a staple cardigan for everyday layering, we’ve got you covered. With a range of styles to suit any aesthetic, you’ll be spoiled for choice.</p>

            {/* Main Layout section */}
            <div className='flex lg:flex-row flex-col gap-4 px-2 lg:px-8 py-6'>
                {/* Left Side Section */}
                <div className='w-full lg:w-[300px] shrink-0'>
                    <Sidebar />
                </div>
                {/* Product Render Section */}
                <div className='bg-[#FBF5DD] flex-1 p-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            CardigansImage.slice(0, 8).map((item) => (
                                <div key={item.id} className='rounded-lg group relative shadow-sm  bg-white/50'>
                                    <img
                                        src={item.image}
                                        alt='cardigansimage'
                                        onClick={() => navigate(`/product/${item.id}`)}
                                        className='w-full h-[300px] object-cover object-center rounded-md cursor-pointer'
                                    />
                                    <div className='absolute top-4 right-2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-500'>
                                        <button className='w-10 h-10 rounded-full shadow-sm flex justify-center items-center
                                        bg-white text-black transition-all duration-300'>
                                            <FaRegHeart />
                                        </button>
                                        <button className='w-10 h-10 rounded-full shadow-sm flex items-center justify-center bg-white text-black transition-all duration-300'>
                                            <FiEye />
                                        </button>
                                    </div>
                                    <div className='pt-2 px-2'>
                                        <h1 className='text-md font-bold tracking-wide line-clamp-1'>
                                            {item.heading}
                                        </h1>
                                        <p className='text-md text-gray-800 tracking-wide line-clamp-1'>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className='flex gap-2 px-2'>
                                        <p className='flex items-center text-blue-700 font-semibold text-lg'>
                                            <MdCurrencyRupee />
                                            {item.price}
                                        </p>
                                        <p className='flex items-center line-through text-red-500 text-lg font-semibold'>
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
                        <div className='col-span-1 sm:col-span-2 lg:col-span-4 overflow-hidden rounded-lg'>
                            <img src={image1} alt='banner'
                                className='w-full h-[250px] lg:h-[300px] object-center '
                            />

                        </div>
                        {
                            CardigansImage.slice(8, 12).map((item) => (
                                <div key={item.id} className='rounded-lg group relative shadow-sm bg-white/50'>
                                    <img
                                        src={item.image}
                                        alt='cardigansimage'
                                        onClick={() => navigate(`/product/${item.id}`)}
                                        className='w-full h-[300px] object-cover object-center rounded-md cursor-pointer'
                                    />
                                    <div className='absolute top-4 right-2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-500'>
                                        <button className='w-10 h-10 rounded-full shadow-sm flex justify-center items-center
                                        bg-white text-black transition-all duration-300'>
                                            <FaRegHeart />
                                        </button>
                                        <button className='w-10 h-10 rounded-full shadow-sm flex items-center justify-center bg-white text-black transition-all duration-300'>
                                            <FiEye />
                                        </button>
                                    </div>

                                    <div className='pt-2 px-2'>
                                        <h1 className='text-md font-bold tracking-wide line-clamp-1'>
                                            {item.heading}
                                        </h1>
                                        <p className='text-md text-gray-800 tracking-wide line-clamp-1'>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className='flex gap-2 px-2'>
                                        <p className='flex items-center text-blue-700 font-semibold text-md'>
                                            <MdCurrencyRupee />
                                            {item.price}
                                        </p>
                                        <p className='flex items-center line-through text-red-500 text-md font-semibold'>
                                            <MdCurrencyRupee />
                                            {item.oldprice}
                                        </p>
                                        <p className='text-[#0D530E] text-md font-semibold'>
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

export default Cardigans