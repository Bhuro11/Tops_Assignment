import React from 'react'
import friut from './images/friuts.png'
import fruit2 from './images/friut2.jpg'

export default function Body2() {
    return (
        <>
            <div>
                <div className='grid md:flex items-center p-3 md:gap-7'>
                    <p className='text-4xl '>Featured Categories</p>
                    <ul className='flex items-center text-xl cursor-pointer gap-4'>
                        <li className='hover:text-green-500'>Milk</li>
                        <li className='hover:text-green-500'>Coffes & Teas</li>
                        <li className='hover:text-green-500'>Pet Foods</li>
                        <li className='hover:text-green-500'>Vegetables</li>
                    </ul>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={friut} className='w-40'></img>
                        <p className='text-2xl mt-2'>Fruits</p>
                        <p className='text-2xl'>10 Items</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={fruit2} className='w-36'></img>
                        <p className='text-2xl'>Fruits</p>
                        <p className='text-2xl'>10 Items</p>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <img src={friut} className='w-40'></img>
                        <p className='text-2xl mt-2'>Fruits</p>
                        <p className='text-2xl'>10 Items</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={fruit2} className='w-36'></img>
                        <p className='text-2xl'>Fruits</p>
                        <p className='text-2xl'>10 Items</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={friut} className='w-40'></img>
                        <p className='text-2xl mt-2'>Fruits</p>
                        <p className='text-2xl'>10 Items</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={fruit2} className='w-36'></img>
                        <p className='text-2xl'>Fruits</p>
                        <p className='text-2xl'>10 Items</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={friut} className='w-40'></img>
                        <p className='text-2xl mt-2'>Fruits</p>
                        <p className='text-2xl'>10 Items</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={fruit2} className='w-36'></img>
                        <p className='text-2xl'>Fruits</p>
                        <p className='text-2xl'>10 Items</p>
                    </div>
                </div>
            </div>
            <hr className='border border-gray-400'></hr>
        </>
    )
}
