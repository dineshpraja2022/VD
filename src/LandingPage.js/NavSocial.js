import React from 'react'
import { UilAirplay,UilPhone,UilMobileAndroidAlt,UilEnvelopes } from '@iconscout/react-unicons'

export default function NavSocial() {
  return (
    <div>
       <div className='  flex sm:flex-row flex-col h-28 sm:40  bg-[#f6f6f6] w-3/4 '>
        <div className='flex object-cover mx-auto  float-left w-auto   '> <div><img src='A1.png' className='h-28 w-42 '/></div> 
        <div className='   py-4'>
          <ul className=''>
            <li className='text-sm md:text-3xl  font-bold text-gray-700 '>ASSOCIATES</li>
            <li>Adv & Tax Consultant</li>
          </ul>
        </div></div>
      <div className='md:mt-8 hidden md:block '>
        <ul className='grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full '>
          <li className=' text-xs sm:text-sm md:xl  flex'><UilPhone className='h-10 w-10  border-4 border-blue-900 rounded-full'/><h1>Phone<br/><h1>0755-4917030</h1></h1></li>
          <li className=' text-xs sm:text-sm md:xl  flex w-60'><UilMobileAndroidAlt className='h-10 w-10  border-4 border-blue-900 rounded-full'/><h1>Phone<br/><h1>+917024389378</h1></h1></li>
          <li className='text-xs sm:text-sm md:xl lg:text-sm flex  w-60'><UilEnvelopes className='h-10 w-10  border-4 border-blue-900 rounded-full'/><h1>Email <br/><h1 className='text-sm'>vdassociates2016@gmail.com</h1></h1></li>

        </ul>
      </div>

      </div>
    </div>
  )
}
 