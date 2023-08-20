import React from 'react';
import Rating from '../../Common_Compo/Rating/Rating';

const Featured_Plant_Card = ({ plant }) => {
    const { name, image, price, rating } = plant || {}
    return (
        <>
            <div className='w-full flex gap-5 my-3 cursor-pointer'>
                <img className='w-20 h-24' src={image} alt="" />
                <div className='space-y-1'>
                    <Rating/>
                    <h3 className='text-md font-serif text-gray-600'>{name}</h3>
                    <p>${price}</p>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Featured_Plant_Card;