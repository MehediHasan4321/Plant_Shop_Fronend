import React, { useState } from 'react';
import Shop_Side_NavBar from '../Shop_Side_NavBar/Shop_Side_NavBar';
import Shop_Card_Container from '../Shop_Card_Container/Shop_Card_Container';
import Sorting from '../Sorting/Sorting';

const Shop_Container = () => {
    const [cards,setCards] = useState([])
    fetch('plants.json').then(res=>res.json()).then(data=>setCards(data))
    return (
        <div className='container mx-auto my-20 grid grid-cols-4'>
            <div className=' col-span-1'>
                <Shop_Side_NavBar />
            </div>
            <div className=' col-span-3'>
                <Sorting cards={cards}/>
                <Shop_Card_Container cards={cards} />
            </div>
        </div>
    );
};

export default Shop_Container;