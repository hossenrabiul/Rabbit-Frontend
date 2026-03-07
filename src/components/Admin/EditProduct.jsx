import React, { useState } from 'react'

const EditProduct = () => {
    const [product, setProduct] = useState({
        name : "",
        description : "",
        price : "",
        countInStock : "",
        colors : [],
        sizes : [],
        image : [
            {
                url : "https://picsum.photos/200/300?random=1",
            },
            {
                url : "https://picsum.photos/200/300?random=2",
            },
        ]
    })

    const handleSetProduct = (e)=>{
        const {name, value} = e.target
        const newProduct = {...product, [name] : value}
        setProduct(newProduct)
    }

  return (
    <div className='max-w-5xl mx-auto p-6 shadow-md rounded-md'>
        <div className="mb-6">
            <label className='block font-samibold mb-2'>Name</label>
            <input 
            className='w-full border border-gray-300  p-2 rounded-md'
            type="text" 
            name="name"
            value={Product.name}
            onChange={handleSetProduct}
            />
        </div>
    </div>
  )
}

export default EditProduct