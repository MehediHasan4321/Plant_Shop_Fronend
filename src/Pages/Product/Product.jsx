import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Image_container from '../../Components/Product_Compo/Image_container/Image_container';
import Product_Details from '../../Components/Product_Compo/Product_Details/Product_Details';
import Product_Description from '../../Components/Product_Compo/Product_Description/Product_Description';
import Product_Review from '../../Components/Product_Compo/Product_Review/Product_Review';
import Related_Product from '../../Components/Product_Compo/Related_Product/Related_Product';

const Product = () => {
    const [product, setProduct] = useState([])
    const [selectItem, setSelectItem] = useState('Description')
    useEffect(() => {
        fetch('plants.json').then(res => res.json()).then(data => setProduct(data[0]))
    }, [])

    const desRev = ['Description', 'Reviews']

    return (
        <div className='container mx-auto my-20'>
            <div className='flex gap-20'>
                <Image_container images={product?.secondary_Image} mainImg={product?.image} />
                <Product_Details product_details={product} />
            </div>
            <div className='mt-10'>
                <div className='w-full flex justify-center gap-5'>
                    {
                        desRev.map((item, index) => <button onClick={() => setSelectItem(item)} className={selectItem === item ? "text-lg font-serif border-b-2 border-green-900" : "text-lg font-serif"} key={index}>{item}</button>)
                    }

                </div>
                {
                    selectItem === 'Description' ? <Product_Description description={product?.description} /> : <Product_Review reviews={product?.reviews} />
                }
            </div>
            <Related_Product/>
        </div>
    );
};

export default Product;