import React from 'react';
import Rating from '../../Common_Compo/Rating/Rating';
import Product_Action from '../Product_Action/Product_Action';

const Product_Details = ({ product_details }) => {
    const { name, rating, description, price, tags, stock, category } = product_details || {}
    return (
        <div className='w-1/2 flex items-center'>
            <div className='space-y-3'>
                <Rating rating={rating} />
                <h4 className='text-2xl font-serif'>{name}</h4>
                <h3 className='text-3xl font-serif'>${price}</h3>
                <hr />
                <p className='text-md text-gray-500'>{description?.slice(0, 350)}</p>
                <h4 className='text-md text-gray-500'>In Stock {stock}</h4>
                <Product_Action />
                <h4 className='text-md text-gray-500'>Category : {category}</h4>
                <h4 className='text-md text-gray-500'>Tags : {tags?.map((tag, index) => <span className='mx-2' key={index}>{tag}</span>)}</h4>
                <h4 className="text-md text-gray-400">Share :</h4>
            </div>
        </div>
    );
};

export default Product_Details;