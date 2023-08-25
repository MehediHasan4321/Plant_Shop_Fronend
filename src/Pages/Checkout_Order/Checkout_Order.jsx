import React from 'react';

const Checkout_Order = () => {
    const checkout = ['Shopping Cart','Checkout','Order Tracking']
    return (
        <div className='container mx-auto'> 
            <div>
                {checkout.map((item,index)=><h3 key={index} className='text-4xl font-serif'>{item}</h3>)}
            </div>
        </div>
    );
};

export default Checkout_Order;