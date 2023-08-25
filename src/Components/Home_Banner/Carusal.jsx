import React from 'react';

const Carusal = ({ item }) => {
    return (
        <div className='w-full h-[70vh]' style={{ backgroundImage: `url(${item.image})`,backgroundRepeat:'no-repeat'}}>
            <div className='container mx-auto flex justify-start items-center h-full'>
                <div className='w-2/5 space-y-7'>
                    <h1 className='text-7xl font-serif'>{item?.title}</h1>
                    <p>{item?.para}</p>
                    <button className='px-8 py-3 bg-[#313232] text-white font-serif'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Carusal;