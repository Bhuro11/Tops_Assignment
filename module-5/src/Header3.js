import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

export default function Header3() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    return (
        <>
            <div className='text-xl flex justify-between items-center m-auto p-3 relative'>
                <select className='border border-black bg-green-600 rounded-md'>Browse All Categories<option>Browse All Categories</option></select>
                
                {/* mobile menu */}
                {
                    isMenuOpen &&
                <div className='grid lg:hidden absolute gap-2 top-16 left-0 justify-center w-full bg-slate-200 '>
                    <ul className='grid justify-center items-center cursor-pointer'>
                        <li className='hover:text-green-500'>Hot Deals</li>
                        <li className='hover:text-green-500'>Home</li>
                        <li className='hover:text-green-500'>About</li>
                        <li className='hover:text-green-500'>Shop</li>
                        <li className='hover:text-green-500'>Vendors</li>
                        <li className='hover:text-green-500'>Mega Menu</li>
                        <li className='hover:text-green-500'>Blog</li>
                        <li className='hover:text-green-500'>Pages</li>
                        <li className='hover:text-green-500'>Contact</li>
                        
                    </ul>
                </div>  
                }

                {/* desktop menu */}
                <div className='hidden lg:block'>
                    <ul className='flex justify-center items-center gap-4 cursor-pointer'>
                        <li className='hover:text-green-500'>Hot Deals</li>
                        <li className='hover:text-green-500'>Home</li>
                        <li className='hover:text-green-500'>About</li>
                        <li className='hover:text-green-500'>Shop</li>
                        <li className='hover:text-green-500'>Vendors</li>
                        <li className='hover:text-green-500'>Mega Menu</li>
                        <li className='hover:text-green-500'>Blog</li>
                        <li className='hover:text-green-500'>Pages</li>
                        <li className='hover:text-green-500'>Contact</li>
                    </ul>
                </div>

                <div className='hidden md:block'>
                    <div className='flex justify-center items-center mr-3'>
                        <i className="fa-solid fa-headphones-simple fa-2xl"></i>
                        <div className='ml-3 text-center'>
                            <span className='text-green-400'>1900 - 888</span>
                            <p>24/7 Support Center</p>
                        </div>
                    </div>
                </div>

                <button className='grid lg:hidden' onClick={()=>setIsMenuOpen(!isMenuOpen)} > {!isMenuOpen ? <TiThMenu /> : <RxCross2 /> }</button>

            </div>
            <hr className='border border-gray-400'></hr>
        </>
    )
}
