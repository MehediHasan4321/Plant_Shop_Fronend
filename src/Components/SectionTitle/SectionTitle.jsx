import React from 'react'

const SectionTitle = ({title,subTitle,para}) => {
    return (
        <div className='w-full container mx-auto py-16'>
            <hr className='mb-16'/>
            <div className='text-center space-y-3 '>
                <h1 className="text-5xl font-serif text-[#313232]">{title}</h1>
                <h1 className="text-5xl italic font-serif text-[#313232]">{subTitle}</h1>
                <p className='text-lg text-[#ccc]'>{para}</p>
            </div>
        </div>
    )
}

export default SectionTitle