import React from 'react'
import { Link } from 'react-router-dom'

const AdminHomePage = () => {
    const orders = [
        {
            orderId : 2354343,
            user : {
                name : "Someone"
            },
            totalPrice : 345,
            status : 'Procedding'
        },
        {
            orderId : 2354343,
            user : {
                name : "Someone"
            },
            totalPrice : 345,
            status : 'Procedding'
        },
        {
            orderId : 2354343,
            user : {
                name : "Someone"
            },
            totalPrice : 345,
            status : 'Procedding'
        },
        {
            orderId : 2354343,
            user : {
                name : "Someone"
            },
            totalPrice : 345,
            status : 'Procedding'
        },
    ]
  return (
    <div className='max-w-7xl p-6'>
        <h1 className='text-3xl font-bold mb-6'>Admin Dashboard</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='p-3 shadow-md rounded-lg'>
                <h2 className='text-xl font-semibold'>Revenue</h2>
                <p className='text-2xl'>$1000</p>
            </div>
            <div className='p-3 shadow-md rounded-lg'>
                <h2 className='text-xl font-semibold'>Total Orders</h2>
                <p className='text-2xl'>$100</p>
                <Link to={'/admin/orders'} className='text-blue-500 hover:underline'>Manage Orders</Link>
            </div>
            <div className='p-3 shadow-md rounded-lg'>
                <h2 className='text-xl font-semibold'>Total Products</h2>
                <p className='text-2xl'>$500</p>
                <Link to={'/admin/products'} className='text-blue-500 hover:underline'>Manage Products</Link>

            </div>
        </div>

        <div className='mt-6'>
            <h2 className='text-2xl font-bold mb-4'>Recent Orders</h2>

            <div className='overflow-x-auto rounded'>
                <table className='min-w-full text-gray-700 text-left'>
                    <thead className='bg-gray-100 text-xs uppercase'>
                        <tr>
                            <th className='px-4 py-3'>OrderId</th>
                            <th className='px-4 py-3'>User</th>
                            <th className='px-4 py-3'>Total Price</th>
                            <th className='px-4 py-3'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length  > 0 ? (
                                orders.map((order) => (
                                    <tr key={order.orderId}>
                                        <td className='px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-200'>#{order.orderId}</td>
                                        <td className='px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-200'>{order.user.name}</td>
                                        <td className='px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-200'>${order.totalPrice}</td>
                                        <td className='px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-200'>{order.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className='text-center '>No Order Found</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AdminHomePage