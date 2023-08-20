import React from 'react';
import Rating from '../../../Common_Compo/Rating/Rating';

const Review = ({ reviews }) => {
    const { name, review, rating, avater } = reviews || {}
    return (
        <div className='my-10 w-1/2 border p-5'>
            <div className='w-full flex justify-between'>
                <div className='flex flex-row items-center gap-5'>
                    <img className='w-16 h-16 rounded-full border' src={avater} alt="image" />
                    <div>
                        <h2>{name}</h2>
                        <h1 className='text-md text-green-600'>Vrified Purchaes</h1>
                    </div>
                </div>
                <Rating rating={rating}/>
            </div>
            <p className='text-md text-gray-600 mt-5'>{review}</p>
        </div>
    );
};

export default Review;