import React from 'react';
import Rating from '../../Common_Compo/Rating/Rating';
import Product_Action from '../Product_Action/Product_Action';
import {FaFacebook,FaInstagram,FaTwitter,FaTiktok} from 'react-icons/fa'

const Product_Details = ({ product_details }) => {
    const { name, rating, description, price, tags, stock, category,reviews } = product_details || {}
    const social_Network =[
        {
            _id:'001',
            name:'Facebook',
            icon:<FaFacebook/>
        },
        {
            _id:'002',
            name:'Instagram',
            icon:<FaInstagram/>
        },
        {
            _id:'003',
            name:'Twitter',
            icon:<FaTwitter/>
        },
        {
            _id:'004',
            name:'TikTok',
            icon:<FaTiktok/>
        }
    ]
    return (
        <div className='w-1/2 flex items-center'>
            <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                <Rating rating={rating} />
                <p className='text-sm text-gray-600'>( {reviews?.length} Customer Review )</p>
                </div>
                <h4 className='text-2xl font-serif'>{name}</h4>
                <h3 className='text-3xl font-serif'>${parseFloat(price).toFixed(2)}</h3>
                <hr />
                <p className='text-md text-gray-500'>{description?.slice(0, 350)}</p>
                <h4 className='text-md text-gray-500'>In Stock {stock}</h4>
                <Product_Action />
                <h4 className='text-md text-gray-500'>Category : {category}</h4>
                <h4 className='text-md text-gray-500'>Tags : {tags?.map((tag, index) => <span className='mx-2' key={index}>{tag}</span>)}</h4>
                <h4 className="text-md text-gray-400 flex gap-5 items-center">Share : {social_Network.map(net=><span className=' cursor-pointer' key={net._id} title={net.name}>{net.icon}</span>)} </h4>
            </div>
        </div>
    );
};

export default Product_Details;