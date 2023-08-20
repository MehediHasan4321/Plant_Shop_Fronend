import React from 'react';

const Plant_Brands = () => {
    const brands = [
        {
            _id: '001',
            name: "AD",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/brand-1.jpg"
        },
        {
            _id: '002',
            name: "AD",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/brand-2.jpg"
        },
        {
            _id: '003',
            name: "AD",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/brand-3.jpg"
        },
        {
            _id: '004',
            name: "AD",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/brand-4.jpg"
        }
    ]
    return (
        <div className='mt-5'>
            <h3 className='text-xl font-serif my-3'>Brands</h3>
            <div className='flex flex-wrap gap-5'>
                {
                    brands.map(brand => <div className='w-32 border p-3 cursor-pointer' title={brand.name} key={brand._id}>
                        <img src={brand.image} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Plant_Brands;