import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa'

const Product_Action = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    return (
        <div className='py-10 w-full'>
            <div className='flex gap-5 justify-center w-full'>
                <div className='border-[1px]'>
                    <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1} className='py-3 px-4 text-2xl'> - </button>
                    <span className='px-4 text-xl font-semibold'>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} disabled={quantity >= 5} className='py-3 px-4 text-2xl'>+</button>

                </div>
                <button className=' w-3/5 py-3 text-white font-semibold border-[1px] bg-gray-400 hover:bg-green-900'>Add To Cart</button>
                <button className='py-3 px-4 border-[1px] text-2xl hover:text-white hover:bg-green-900'><FaRegHeart /></button>
            </div>
            <button className='w-11/12 py-3 text-lg font-semibold bg-green-900 hover:bg-black text-white mt-5 mx-8'>Buy Now</button>
            <hr className='mt-10'/>
        </div>
    );
};

export default Product_Action;