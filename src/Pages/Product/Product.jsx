import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Image_container from '../../Components/Product_Compo/Image_container/Image_container';
import Product_Details from '../../Components/Product_Compo/Product_Details/Product_Details';

const Product = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('plants.json').then(res => res.json()).then(data => setProduct(data[0]))
    }, [])

    return (
        <div className='container mx-auto my-20'>
            <div className='flex gap-20'>
                <Image_container images={product?.secondary_Image} mainImg={product?.image} />
                <Product_Details product_details={product} />
            </div>
        </div>
    );
};

export default Product;