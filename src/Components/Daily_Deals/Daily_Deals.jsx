import React, { useState } from 'react'
import Plant_Card from '../Plant_Card/Plant_Card'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Daily_Deals = () => {
    const [cards, setCards] = useState([])
    fetch('plants.json').then(res => res.json()).then(data => setCards(data))
    return (
        <div className='container mx-auto'>
            <div className='my-20 flex justify-between items-center w-full'>
                <h1 className='text-5xl font-serif'>Daily Deals</h1>
                <div className='text-xl font-serif flex items-center gap-2 cursor-pointer'>
                    See More <AiOutlineArrowRight/>
                </div>
            </div>
            <div className='flex justify-between flex-wrap gap-10'>
                {cards.map(card => <Plant_Card key={card._id} cardInfo={card} />)}
            </div>
        </div>
    )
}

export default Daily_Deals