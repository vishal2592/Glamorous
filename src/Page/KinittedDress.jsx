import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import { KinittedImage } from '../store/KinittedImage'
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import image1 from '../assets/images/kinittedimage/kinittedbanner.png'
import { useEffect } from 'react';

const KinittedDress = () => {

  const navigate = useNavigate();

   useEffect(() => {
  
      window.scrollTo(0, 0)
  
  }, [])
  
  return (
    <div className='bg-[#E7E1B1]'>
      <div className='flex justify-center items-center pt-8 gap-2'>
        <Link to="/">Home</Link> /
        <Link to="/kinitteddress">Kinitted Dress</Link>
      </div>
      <h1 className='flex justify-center items-center text-2xl font-bold pt-4'>KINITTED DRESS</h1>
      <p className='px-20 hidden lg:flex items-center text-center leading-8 pt-4'>Get cosy and stylish with our Knitted Dresses! With a variety of lengths and styles to choose from, these dresses will keep you warm and looking great. Perfect for any occasion, whether you're dressing up or keeping it casual. Don't sacrifice comfort for fashion - get both with our Knitted Dresses.</p>

      {/* Main Layout section */}
      <div className='flex lg:flex-row flex-col gap-4 px-2 lg:px-8 py-6'>
        {/* Left side content */}
        <div className='w-full lg:w-[300px] shrink-0'>
          <Sidebar />
        </div>
        {/* Product render Section */}
        <div className='bg-[#FBF5DD] flex-1 p-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
              KinittedImage.slice(0,8).map((item) => (
                <div key={item.id} className='rounded-lg group relative shadow-sm bg-white/50'
                >
                  <img
                    src={item.image}
                    alt='kinittedimage'
                    onClick={() => navigate(`/product/${item.id}`)}
                    className='w-full h-[300px] object-cover object-center cursor-pointer rounded-md'
                  />
                  <div className='absolute top-4 right-2 flex flex-col gap-3  opacity-0
                  group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-500'>
                    <button className='w-10 h-10 flex justify-center items-center rounded-full 
                  shadow-sm transition-all duration-300 bg-white text-black'>
                      <FaRegHeart />
                    </button>
                    <button className='w-10 h-10 flex justify-center items-center rounded-full 
                  shadow-sm transition-all duration-300 bg-white text-black'>
                      <FiEye />
                    </button>
                  </div>
                  <div className='pt-2 px-2'>
                    <h1 className='text-md font-bold tracking-wide line-clamp-1 '>
                      {item.heading}
                    </h1>
                    <p className='text-md text-gray-800 tracking-wide line-clamp-1'>
                      {item.description}
                    </p>
                  </div>
                  <div className='flex items-center gap-2 px-2 '>
                    <p className='flex items-center text-lg font-semibold text-blue-700'>
                      <MdCurrencyRupee />
                      {item.price}
                    </p>
                    <p className='flex items-center text-lg text-red-600 line-through'>
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
                className='w-full h-[250px] lg:h-[300px] object-center'
              />
            </div>
              {
              KinittedImage.slice(8,12).map((item) => (
                <div key={item.id} className='rounded-lg group relative shadow-sm bg-white/50'
                >
                  <img
                    src={item.image}
                    alt='kinittedimage'
                    onClick={()=>navigate(`/product/${item.id}`)}
                    className='w-full h-[300px] object-cover object-center cursor-pointer rounded-md'
                  />
                  <div className='absolute top-4 right-2 flex flex-col gap-3  opacity-0
                  group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-500'>
                    <button className='w-10 h-10 flex justify-center items-center rounded-full 
                  shadow-sm transition-all duration-300 bg-white text-black'>
                      <FaRegHeart />
                    </button>
                    <button className='w-10 h-10 flex justify-center items-center rounded-full 
                  shadow-sm transition-all duration-300 bg-white text-black'>
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
                  <div className='flex items-center gap-2 px-2 '>
                    <p className='flex items-center text-lg font-semibold text-blue-700'>
                      <MdCurrencyRupee />
                      {item.price}
                    </p>
                    <p className='flex items-center text-lg text-red-600 line-through'>
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

export default KinittedDress