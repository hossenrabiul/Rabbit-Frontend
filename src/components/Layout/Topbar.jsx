import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'

const Topbar = () => {
  return (
    <div className='bg-[#ea2e0e] text-white'>
        <div className='container mx-auto flex items-center justify-between py-5 px-5'>
            <div className='hidden md:flex items-center space-x-4'>
              <a href="#" className='hover:text-gray-300'>
                <TbBrandMeta className='h-5 w-5'/>
              </a>
              <a href="#" className='hover:text-gray-300'>
                <IoLogoInstagram className='h-5 w-5'/>
              </a>
              <a href="#" className='hover:text-gray-300'>
                <RiTwitterXLine className='h-5 w-5'/>
              </a>
            </div>

            <div className='text-sm text-center flex-grow'>
              <span>We Ship Worldwide - Fast and reliable shipping</span>
            </div>
            <div className='hidden md:block text-sm'>
              <a href="#" className='hover:text-gray-300'>
                +1 (123) 037383
              </a>
            </div>
        </div>
    </div>
  )
}

export default Topbar