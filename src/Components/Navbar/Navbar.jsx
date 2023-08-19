import {Link} from 'react-router-dom'
import {BiUser,BiShoppingBag} from 'react-icons/bi'
import {GrFavorite} from 'react-icons/gr'
const Navbar = () => {
    return (
        <div className='w-full h-20 bg-white opacity-75'>
            <div className='container mx-auto flex justify-between items-center h-full w-full'>
                <h1 className='text-5xl font-semibold'>Greenery</h1>
                <div className='flex gap-7 items-center font-semibold'>
                    <Link to={'/'}>Home</Link>
                    <Link>Shop</Link>
                    <Link>Blog</Link>
                </div>
                <div className='flex gap-7 items-center'>
                <button className='text-2xl'><BiUser/></button>
                <button className='text-2xl'><GrFavorite/></button>
                <button className='text-2xl'><BiShoppingBag/></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar