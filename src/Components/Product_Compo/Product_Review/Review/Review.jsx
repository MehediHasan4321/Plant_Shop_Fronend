import React from 'react';
import Rating from '../../../Common_Compo/Rating/Rating';
import {GiConfirmed} from 'react-icons/gi'
const Review = ({ reviews }) => {
    const { name, review, rating, avater } = reviews || {}
    return (
        <div className=' w-4/5 p-5'>
            <div className='w-full flex justify-between'>
                <div className='flex flex-row items-center gap-5'>
                    <img className='w-16 h-16 rounded-full border' src={avater} alt="image" />
                    <div>
                        <h2 className='text-sm text-gray-500'>By <span className='text-md text-black'>{name}</span> August 13 2023</h2>
                        <h1 className='text-md text-green-600 flex gap-2 items-center'><Rating rating={rating}/> Verified Purchase <GiConfirmed/></h1>
                    </div>
                </div>
                
            </div>
            <p className='text-md text-gray-600 mt-5'>{review}</p>
            <hr className='mt-10' />
        </div>
    );
};

export default Review;