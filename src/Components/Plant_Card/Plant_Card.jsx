import React, { useState } from 'react'
import { BiShoppingBag, BiSearch } from 'react-icons/bi'
import { GrFavorite } from 'react-icons/gr'
import { Link } from 'react-router-dom'
const Plant_Card = ({ cardInfo }) => {
    const { name, image, hoverImage, price, isHot } = cardInfo || {}
    const [isHover, setisHover] = useState(false)

    return (
        <>
            <Link to={'/product'} onMouseOver={() => setisHover(true)} onMouseOut={() => setisHover(false)} className='w-[330px] h-[400px] relative cursor-pointer my-10'>
                <img className='w-full h-full' src={isHover ? hoverImage : image} alt={name} />
                <div className=' absolute top-2 right-2'>
                    {isHot && <span className='bg-red-400 px-2 text-white font-semibold'>Hot</span>}
                </div>
                {/* {isHover && <div className=' absolute bottom-5 flex justify-center items-center gap-3 w-full'>
                    <div className='bg-white p-2 text-xl rounded-full hover:bg-green-900 hover:text-white'>
                        <BiShoppingBag />
                    </div>
                    <div className='bg-white p-2 text-xl rounded-full hover:bg-green-900 hover:text-white'>
                        <GrFavorite />
                    </div>
                    <div className='bg-white p-2 text-xl rounded-full hover:bg-green-900 hover:text-white'>
                        <BiSearch  />
                    </div>
                </div>} */}
                <div className='w-full flex justify-between  items-center mt-5'>
                    <h1>{name}</h1>
                    <p>${price}</p>
                </div>

            </Link>
            
        </>
    )
}

export default Plant_Card