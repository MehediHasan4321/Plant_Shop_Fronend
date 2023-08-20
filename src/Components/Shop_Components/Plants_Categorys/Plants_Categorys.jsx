import React from 'react';

const Plants_Categorys = ({category,clickEvent}) => {
    const {image,title} = category || {}
    return (
        <div className='w-48 flex flex-col items-center cursor-pointer' onClick={()=>clickEvent(title)}>
            <img className='w-32  h-32 rounded-full hover:border border-black hover:p-2' src={image} alt="" />
            <h4 className='text-md font-serif text-center mt-4'>{title}</h4>
        </div>
    );
};

export default Plants_Categorys;