
import Plant_Card from '../../Plant_Card/Plant_Card';

const Shop_Card_Container = ({cards}) => {
    
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 w-full'>
            {
                cards.map(card=><Plant_Card cardInfo={card}/>)
            }
        </div>
    );
};

export default Shop_Card_Container;