import React from 'react'

const Single_Work_Flow = ({info}) => {
    const {title,image} = info || {}
    return (
        <div className='w-60 flex flex-col items-center space-y-2'>
            <img className='w-20' src={image} alt="" />
            <h1 className='text-xl font-serif'>{title}</h1>
        </div>
    )
}

export default Single_Work_Flow