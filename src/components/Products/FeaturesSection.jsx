import React from 'react'
import { HiCheck, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi'
import { HiArrowTurnRightDown } from 'react-icons/hi2'

const FeaturesSection = () => {
  return (
    <div className='py-16 px-4'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3'>
            <div className='flex flex-col items-center'>
                <div className='p-4 mb-3 rounded-full'>
                    <HiShoppingBag className='text-lg'/>
                </div>
                <h1 className='mb-2 tracking-tighter uppercase font-semibold'>Free International Shipping</h1>
                <p className='text-sm text-gray-700'>on all orders over $1000</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='p-4 mb-3 rounded-full'>
                    <HiArrowTurnRightDown className='text-lg'/>
                </div>
                <h1 className='mb-2 tracking-tighter uppercase font-semibold'>45 days return</h1>
                <p className='text-sm text-gray-700'>Money back gurantee</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='p-4 mb-3 rounded-full'>
                    <HiOutlineCreditCard className='text-lg'/>
                </div>
                <h1 className='mb-2 tracking-tighter uppercase font-semibold'>Secure Checkout</h1>
                <p className='text-sm text-gray-700'>100% secure checkout</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturesSection