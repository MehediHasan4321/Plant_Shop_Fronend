import React, { useState } from 'react';

const Shop_Side_NavBar = () => {
    const [maxPrice,setMaxPrice] = useState(273)
    const [minPrice,setMinPrice] = useState(10)
    const categorys = [
        {
            _id: 1,
            name: 'Air Purifying',
            amount: 5
        },
        {
            _id: 2,
            name: 'Ceramic Pots',
            amount: 3
        },
        {
            _id: 3,
            name: 'Indoors Plants',
            amount: 6
        },
        {
            _id: 4,
            name: 'Low Maintainces',
            amount: 7
        },
        {
            _id: 5,
            name: 'Plant Bundle',
            amount: 2
        }
    ]
    const handleOneChange = ()=>{

    }
    return (
        <div className='w-4/5'>
            <h3 className='text-2xl font-serif mb-10'>Categorys</h3>
            {
                categorys.map(cate => <div key={cate._id} className='flex justify-between items-center my-3'>
                    <p className='text-gray-600 text-md font-serif cursor-pointer hover:text-gray-700'>{cate.name}</p>
                    <span className='bg-gray-200 px-2 rounded-full'>{cate.amount}</span>
                </div>)
            }
            <div className='mt-10'>
                <p className='text-3xl font-serif mb-5'>Price</p>
                <input onChange={handleOneChange}  className='w-full' type="range" name="price_range" id="" min={minPrice} max={maxPrice} />
                <p>Range: ${ minPrice} to ${maxPrice}</p>
            </div>
        </div>
    );
};

export default Shop_Side_NavBar;