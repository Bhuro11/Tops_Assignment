import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
export default function Header1() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    return (
        <>
            <div className='flex justify-between items-center m-auto p-2'>
                {/* mobile menu */}
                {
                    isMenuOpen &&
                <div className='grid bg-slate-200 z-10 md:hidden absolute top-9 left-0 justify-center w-full'>
                        <ul className='text-xl text-gray-700 grid justify-center items-center cursor-pointer'>
                            <li className='hover:text-green-500'>About Us</li>
                            <li className='hover:text-green-500'>My Account</li>
                            <li className='hover:text-green-500'>Whishlist</li>
                            <li className='hover:text-green-500'>Order Tracking</li>
                        </ul>
                </div>
                }

                {/* desktop menu */}

                <div className='hidden md:flex justify-between items-center'>
                        <ul className='text-xl text-gray-700 flex justify-center items-center gap-4 cursor-pointer'>
                            <li className='hover:text-green-500'>About Us</li>
                            <li className='hover:text-green-500'>My Account</li>
                            <li className='hover:text-green-500'>Whishlist</li>
                            <li className='hover:text-green-500'>Order Tracking</li>
                        </ul>
                </div>

                    <div>
                        <p className='hidden md:block md:text-xl'>Get great products upto 50% off <span className='text-green-400'>View Details</span></p>
                    </div>
                    <div >
                        <p className='hidden lg:block lg:text-xl'>Need Help? Call us <span className='text-green-400'>1800 900</span><select className='border border-black ml-2 rounded-md'>English<option>English</option></select ><select className='border border-black ml-2 rounded-md'>USD $<option>USD $</option></select></p>
                    </div>
                    <button className='grid lg:hidden' onClick={()=>setIsMenuOpen(!isMenuOpen)} > {!isMenuOpen ? <TiThMenu /> : <RxCross2 /> }</button>
            </div>
            <hr className='border border-gray-400 md:w-full'></hr>
        </>
    )
}
