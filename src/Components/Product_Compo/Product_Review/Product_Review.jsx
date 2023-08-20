import React from 'react';
import Review from './Review/Review';
import Give_Review from './Give_Review/Give_Review';

const Product_Review = ({ reviews = [] }) => {
    return (
        <div className='container mx-auto mt-10 '>
            <div className='flex justify-between gap-10'>
                {
                    reviews?.map((review,index) => <Review key={index} reviews={review} />)
                }
            </div>
            <Give_Review/>
        </div>
    );
};

export default Product_Review;