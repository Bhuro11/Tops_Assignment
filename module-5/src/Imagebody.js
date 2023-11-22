import React from 'react'
import banner from './images/banner.jpg'

export default function Imagebody() {
  return (
   <>
        <div className='flex justify-center items-center p-5'>
            <img src={banner}></img>
            <div className='absolute left-3 text-2xl'>⬅</div>
            <div className='absolute right-3 text-2xl'>➡</div>
        </div>
        <hr className='border border-gray-400'></hr>
   </>
  )
}
