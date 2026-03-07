import React from 'react'
import { HiTrash } from 'react-icons/hi';

const CartComponents = () => {
    const products = [
        {
            id : 1,
            name : "T-shirt",
            Size : "M",
            Price : 3455,
            color : "white",
            quantity : 1,
            image : "https://picsum.photos/200?random=1"
        },
        {
            id : 2,
            name : "Jeans",
            Size : "XL",
            Price : 3055,
            color : "Blue",
            quantity : 1,
            image : "https://picsum.photos/200?random=2"
        },
        {
            id : 3,
            name : "Shirt",
            Size : "XLL",
            Price : 305,
            color : "White",
            quantity : 1,
            image : "https://picsum.photos/200?random=3"
        },
        {
            id : 4,
            name : "Half Pent",
            Size : "L",
            Price : 3055,
            color : "Green",
            quantity : 1,
            image : "https://picsum.photos/200?random=4"
        },
        {
            id : 5,
            name : "Shirt",
            Size : "XL",
            Price : 365,
            color : "BLue Green",
            quantity : 1,
            image : "https://picsum.photos/200?random=5"
        }
    ];
  return (
    <div>
 
        {products.map((product, index) =>(
            
                <div key={index} className='flex border-b mb-4 pb-2 items-start justify-between'>
                    <div className='flex'>
                        <img className='w-20 h-24 rounded mr-2' src={product.image} alt={product.name} />
                        <div>
                            <h6 className='text-sm font-semibold mb-2'>{product.name}</h6>
                            <p className='text-xs font-medium text-gray-600'>Size : {product.Size} | Color: {product.color}</p>
                            <div className='flex items-center gap-2.5 mt-2'>
                                <button className='border px-2 py-1 rounded font-semibold text-sm'>-</button>
                                <span className='text-sm font-semibold'>1</span>
                                <button className='border px-2 py-1 rounded font-semibold text-sm'>+</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='text-sm font-semibold'>${product.Price}</span>
                        <HiTrash className='text-red-700 font-semibold text-xl'/>
                    </div>
                </div>
        ))
        }
    </div>
  )
}

export default CartComponents