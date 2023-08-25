import { Link } from 'react-router-dom'
import { BiUser, BiShoppingBag } from 'react-icons/bi'
import { GrFavorite } from 'react-icons/gr'
import { useState } from 'react'
import Favorite_AddToCart from './Favorite_AddToCart/Favorite_AddToCart'
const Navbar = () => {
    const [addToCartVisible, setAddToCartVisible] = useState('none')
    const [favoriteVisibility, setFavoriteVisibility] = useState('none')
    const handleAddToCartVisibility = () => {
        if (addToCartVisible === 'none') {
            setFavoriteVisibility('none')
            setAddToCartVisible('block')
        } else {
            setAddToCartVisible('none')
        }
    }

    const handleFavoritetVisibility = () => {
        if (favoriteVisibility === 'none') {
            setAddToCartVisible('none')
            setFavoriteVisibility('block')
        } else {
            setFavoriteVisibility('none')
        }
    }

    const totalCartMenu = [
        {
            "_id": "002",
            "name": "Devil’s Ivy",
            "description": "",
            "price": "120",
            "isHot": true,
            "image": "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2018/10/16-7-600x713.jpg",
            "hoverImage": "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2018/10/16-8-600x713.jpg"
        },
        {
            "_id": "003",
            "name": "Devil’s Ivy",
            "description": "",
            "price": "40",
            "isHot": true,
            "image": "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2019/04/1-600x713.jpg",
            "hoverImage": "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2019/04/2-600x713.jpg"
        }
    ]
    return (
        <div className='w-full h-20 bg-white opacity-75'>
            <div className='container mx-auto flex justify-between items-center h-full w-full'>
                <h1 className='text-5xl font-semibold text-green-600'>Greenery</h1>
                <div className='flex gap-7 items-center font-semibold'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/shop'}>Shop</Link>
                    <Link>Blog</Link>
                </div>
                <div className='flex gap-7 items-center h-20 relative'>
                    <button className='text-3xl'><BiUser /></button>
                    <div className='relative' onClick={handleFavoritetVisibility}>
                        <button className='text-2xl'><GrFavorite /></button>
                        <span className='bg-black text-white px-1 rounded-full text-sm absolute -top-2 -right-4'>0</span>
                    </div>
                    <div className='relative' onClick={handleAddToCartVisibility}>
                        <button className='text-3xl'><BiShoppingBag /></button>
                        <span className='bg-black text-white px-1 rounded-full text-sm absolute -top-1 -right-3'>{totalCartMenu.length}</span>
                    </div>
                    <Favorite_AddToCart visible={addToCartVisible} value={totalCartMenu} title={'Cart'} />
                    <Favorite_AddToCart visible={favoriteVisibility} title={'Favorite'}  />
                </div>
            </div>
        </div>
    )
}

export default Navbar