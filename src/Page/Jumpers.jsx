import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import { JumperImage } from '../store/JumperImage'
import { MdCurrencyRupee } from "react-icons/md";
import image1 from '../assets/images/banner2.2.png'


const Jumpers = () => {

    const navigate = useNavigate();

    return (
        <div className='bg-[#E7E1B1]'>
            <div className='pt-10 flex justify-center items-center gap-4'>
                <Link to='/'>Home</Link> /
                <Link to='/jumper'>Jumpers</Link>
            </div>
            <div className='pt-6 px-20 leading-8'>
                <h1 className='flex justify-center items-center text-2xl font-bold '>JUMPERS</h1>
                <p className='pt-2 hidden lg:flex justify-center items-center text-center '>You can’t go wrong with one of our stylish jumpers. Whether you choose to style it with your favourite pair of jeans or dress your look up by adding a cute mini skirt, you’re sure to be on-trend. With a range of styles featuring cropped fits to short sleeves and even cable-knit detail, there’s a perfect jumper for everyone.</p>
            </div>
            {/* Main Layout Section */}
            <div className='flex lg:flex-row flex-col gap-4 px-2 lg:px-8  py-6 '>

                {/* Sidebar */}
                <div className='w-full lg:w-[300px] shrink-0'>
                    <Sidebar />
                </div>

                {/* Product Render Section */}
                <div className='flex-1 bg-[#FBF5DD] p-4'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                        {JumperImage.slice(0, 8).map((item) => (
                            <div
                                key={item.id}
                                className='bg-white/50 group  rounded-lg shadow-sm'
                            >
                                <img
                                    src={item.image}
                                    alt="jumperimage"
                                    onClick={() => navigate(`/product/${item.id}`)}
                                    className='w-full h-[300px] object-cover object-center rounded-md'
                                />

                                <div className='pt-2 px-2'>
                                    <h2 className='text-md font-bold tracking-wide line-clamp-1'>
                                        {item.heading}
                                    </h2>

                                    <p className='text-gray-700 text-md  tracking-wide line-clamp-1'>
                                        {item.description}
                                    </p>

                                    <p className='text-xl font-bold text-[#0D530E]'>
                                        {item.discount}
                                    </p>
                                    <div className='flex gap-2 text-xl'>
                                        <p className='flex items-center line-through text-slate-600'>
                                            <MdCurrencyRupee className='' />
                                            {item.oldprice}
                                        </p>
                                        <p className='flex items-center text-black font-bold'>
                                            <MdCurrencyRupee />
                                            {item.price}
                                        </p>
                                    </div>
                                    <p className='text-gray-500'>
                                        {item.comment}
                                    </p>
                                    <div className=''>

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
                            </div>
                        ))}
                        <div className='col-span-1 sm:col-span-2 lg:col-span-4 w-full overflow-hidden rounded-xl'>

                            <img
                                src={image1}
                                alt='banner'
                                className='w-full h-[250px] lg:h-[300px] object-center'
                            />

                        </div>
                         {JumperImage.slice(8, 12).map((item) => (
                            <div
                                key={item.id}
                                className='bg-white/50 group  rounded-lg shadow-sm'
                            >
                                <img
                                    src={item.image}
                                    alt="jumperimage"
                                    onClick={() => navigate(`/product/${item.id}`)}
                                    className='w-full h-[300px] object-cover object-center rounded-md'
                                />

                                <div className='pt-2 px-2'>
                                    <h2 className='text-md font-bold tracking-wide line-clamp-1'>
                                        {item.heading}
                                    </h2>

                                    <p className='text-gray-700 text-md pt-1 tracking-wide line-clamp-1'>
                                        {item.description}
                                    </p>

                                    <p className='text-xl font-bold text-[#0D530E]'>
                                        {item.discount}
                                    </p>
                                    <div className='flex gap-2 text-xl'>
                                        <p className='flex items-center line-through text-slate-600'>
                                            <MdCurrencyRupee className='' />
                                            {item.oldprice}
                                        </p>
                                        <p className='flex items-center text-black font-bold'>
                                            <MdCurrencyRupee />
                                            {item.price}
                                        </p>
                                    </div>
                                    <p className='text-gray-500'>
                                        {item.comment}
                                    </p>
                                    <div className=''>

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
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Jumpers