import React from 'react';

const Product_Description = ({description}) => {
    return (
        <div className='container mx-auto my-20'>
            <p className='text-md text-gray-500'>{description}</p>
        </div>
    );
};

export default Product_Description;