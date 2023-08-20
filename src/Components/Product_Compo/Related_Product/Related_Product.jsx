import { useEffect } from "react";
import { useState } from "react";
import Plant_Card from "../../Plant_Card/Plant_Card";

const Related_Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('plants.json').then(res => res.json()).then(data => setProducts(data))
    }, [])
    return (
        <div className="container mx-auto my-20">
            <h1 className="text-4xl font-serif text-center">Related Plants</h1>
        
            <div className='flex justify-between flex-wrap gap-10'>
                {products.map(card => <Plant_Card key={card._id} cardInfo={card} />)}
            </div>
        </div>
    );
};

export default Related_Product;