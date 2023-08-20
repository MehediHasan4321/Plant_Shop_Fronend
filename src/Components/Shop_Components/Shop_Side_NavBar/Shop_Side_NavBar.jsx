import React, { useState } from 'react';
import Plant_Brands from '../Plant_Brands/Plant_Brands';
import Featured_Plants from '../Featured_Plants/Featured_Plants';

const Shop_Side_NavBar = () => {
    const [maxPrice,setMaxPrice] = useState(273)
    const [minPrice,setMinPrice] = useState(10)
    const [value,setValue] = useState(0)
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
    
    return (
        <div className='w-4/5'>
            <h3 className='text-xl font-serif mb-10'>Categorys</h3>
            {
                categorys.map(cate => <div key={cate._id} className='flex justify-between items-center my-3'>
                    <p className='text-gray-400 text-md font-semibold cursor-pointer hover:text-gray-700'>{cate.name}</p>
                    <span className='bg-gray-200 px-2 rounded-full'>{cate.amount}</span>
                </div>)
            }
            <div className='mt-10'>
                <p className='text-xl font-serif mb-5'>Price</p>
                <input className='w-full' type="range" name="price_range" id="" min={minPrice} max={maxPrice} />
                <p>Range: ${ minPrice} to ${maxPrice}</p>
            </div>
            <Plant_Brands/>
            <Featured_Plants/>
        </div>
    );
};

export default Shop_Side_NavBar;