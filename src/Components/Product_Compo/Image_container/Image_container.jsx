import React from 'react';
import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify'
const Image_container = ({ images = [], mainImg }) => {
    const [mainImage, setMainImage] = useState(mainImg)

    return (
        <div className='flex'>
            <div className='space-y-5 mr-5 w-32'>
                {
                    images.map((img, index) => <img onClick={() => setMainImage(img)} className={mainImage === img ? 'w-32 border border-black' : 'w-32 hover:border border-black'} key={index} src={img} />)
                }
            </div>
            <img className='w-full' src={ mainImage? mainImage : mainImg} alt="Plant Image" />
            {/* <div className='w-full border border-black'>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'plant Image',
                        isFluidWidth: true,
                        src: `${mainImage ? mainImage : mainImg}`
                    },
                    largeImage: {
                        src: `${mainImage ? mainImage : mainImg}`,
                        width: 1200,
                        height: 1800,
                        alt:'Plant Image'
                    }
                }} />
            </div> */}
        </div>
    );
};

export default Image_container;