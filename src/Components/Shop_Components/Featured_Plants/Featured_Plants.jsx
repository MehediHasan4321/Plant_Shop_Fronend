import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Featured_Plant_Card from '../Featured_Plant_Card/Featured_Plant_Card';

const Featured_Plants = () => {
    const [featured,setFeatured] = useState([])
    useEffect(()=>{
        fetch('plants.json').then(res=>res.json()).then(data=>setFeatured(data))
    },[])
    return (
        <div className='my-5'>
            <h3 className='text-xl font-serif my-3'>Featured Plants</h3>
            {
                featured.slice(0,3).map(plant=><Featured_Plant_Card key={plant._id} plant={plant}/>)
            }
        </div>
    );
};

export default Featured_Plants;