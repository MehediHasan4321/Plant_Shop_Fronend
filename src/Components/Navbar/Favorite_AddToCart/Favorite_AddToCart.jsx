import { RxCrossCircled } from 'react-icons/rx'
import Nav_bar_Button from './Nav_bar_Button';

const Favorite_AddToCart = ({ visible, value = [], title }) => {

    return (
        <div className='w-80 min-h-fit shadow-2xl absolute top-20 right-0 p-3 bg-white z-10' style={{ display: `${visible}` }}>
            
            {
                value?.length > 0 ? value?.map(item => <div key={item._id} className='m-2'>
                    <h1 className='text-2xl font-serif text-center mt-2'>{title}</h1>
                    <div className='flex gap-2 m-2'>
                        <img className='w-20 h-20' src={item?.image} alt="" />
                        <div>
                            <h3 className='text-black font-serif'>{item?.name}</h3>
                            <h4>Qty: {item?.quantity ? item?.quantity : 1}</h4>
                            <h4>Price: ${item?.price}</h4>
                        </div>
                        <div className=' ml-auto cursor-pointer'>
                            <RxCrossCircled />
                        </div>
                    </div>
                </div>) : <h1 className='text-3xl font-serif text-center'>No {title} Found</h1>
            }
            <hr className='my-4' />
            <div className='px-4'>
                <div className='text-xl font-serif flex justify-between items-center text-black'>
                    <h1>Total </h1>
                    <h1>$240</h1>
                </div>
                <div className='my-4 flex justify-between items-center'>
                    <Nav_bar_Button value='View Cart' />
                    <Nav_bar_Button value='Check Out' />

                </div>
            </div>
        </div>
    );
};

export default Favorite_AddToCart;