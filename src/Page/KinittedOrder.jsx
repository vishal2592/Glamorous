import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import { Order } from '../store/order'
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import image1 from '../assets/images/order/orderbanner.png'



const KinittedOrder = () => {
    
    const navigate = useNavigate();
    return (
        <div className='bg-[#E7E1B1]'>
            <div className='flex justify-center items-center gap-2 pt-8'>
                <Link to="/">Home</Link> /
                <Link to="/">KINITTED CO-ORDS</Link>
            </div>
            <h1 className='pt-4 flex justify-center items-center text-2xl font-bold'>KINITTED CO-ORDS</h1>
            <p className='hidden lg:flex items-center text-center px-20 pt-4 leading-8'>Stay comfortable in style with our range of knitted co-ords. The perfect ready-to-wear staple, our knitted co-ords make it super easy when getting ready, allowing you to pull together a full look in an instant. No matter the season, our knitted co-ords are a true wardrobe fixture that can be worn in a variety of ways. So, wait no longer and snap up these must-have pieces before they’re gone!</p>

            {/* Main Layout Section */}
            <div className='flex flex-col lg:flex-row gap-4 px-2 lg:px-8 py-6'>
                {/* Left side content */}
                <div className='w-full lg:w-[300px] shrink-0'>
                    <Sidebar />
                </div>
                {/* Right side Content */}
                <div className='flex-1 bg-[#FBF5DD]'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
                        {
                            Order.slice(0,8).map((item) => (
                                <div key={item.id}
                                    className='bg-white/50 rounded-lg shadow-sm group relative'
                                >
                                    <img
                                        src={item.image}
                                        alt='order'
                                        onClick={()=>navigate(`/product/${item.id}`)}
                                        className='w-full h-[300px] object-center rounded-md cursor-pointer'
                                    />
                                    <div className='absolute top-4 right-2 flex flex-col gap-3 opacity-0
                            group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 
                            transition-all duration-500'>
                                        <button className='w-10 h-10 flex justify-center items-center bg-white 
                            text-black transition-all duration-300 rounded-full shadow-sm'>
                                            <FaRegHeart />
                                        </button>
                                        <button className='w-10 h-10 flex justify-center items-center bg-white 
                            text-black transition-all duration-300 rounded-full shadow-sm'>
                                            <FiEye />
                                        </button>
                                    </div>
                                    <div className='px-2'>
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
                        <div className='col-span-1 sm:col-span-2 lg:col-span-4 overflow-hidden rounded-lg'>
                            <img src={image1} alt='banner' 
                                className='w-full sm:h-[250px] lg:h-[300px] object-center'
                            />
                        </div>
                        {
                            Order.slice(8,12).map((item) => (
                                <div key={item.id}
                                    className='bg-white/50 rounded-lg shadow-sm group relative'
                                >
                                    <img
                                        src={item.image}
                                        alt='order'
                                        onClick={()=>navigate(`/product/${item.id}`)}
                                        className='w-full h-[300px] object-center rounded-md cursor-pointer'
                                    />
                                    <div className='absolute top-4 right-2 flex flex-col gap-3 opacity-0
                            group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 
                            transition-all duration-500'>
                                        <button className='w-10 h-10 flex justify-center items-center bg-white 
                            text-black transition-all duration-300 rounded-full shadow-sm'>
                                            <FaRegHeart />
                                        </button>
                                        <button className='w-10 h-10 flex justify-center items-center bg-white 
                            text-black transition-all duration-300 rounded-full shadow-sm'>
                                            <FiEye />
                                        </button>
                                    </div>
                                    <div className='px-2'>
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

export default KinittedOrder