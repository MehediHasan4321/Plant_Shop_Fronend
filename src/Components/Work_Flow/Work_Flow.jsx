import {GiThreeLeaves} from 'react-icons/gi'
import Single_Work_Flow from './Single_Work_Flow/Single_Work_Flow'

const Work_Flow = () => {
    const flow = [
        {
            image:'https://i.ibb.co/0j9cLCK/leaves.png',
            title:"Pick your plant",
            _id:"1"
        },
        {
            image:"https://www.svgrepo.com/show/63552/garden-plant-in-a-pot.svg",
            title:"Choose a pot colort",
            _id:"2"
        },
        {
            image:"https://www.svgrepo.com/download/60587/fast-delivery.svg",
            title:"Have it shipped",
            _id:"3"
        },
        {
            image:"https://uxwing.com/wp-content/themes/uxwing/download/agriculture-farming-gardening/watering-can-icon.png",
            title:"Watch it grow",
            _id:"4"
        }
    ]
    return (
        <div className='container mx-auto flex justify-between items-center'>
           {
            flow.map(item=><Single_Work_Flow key={item._id} info={item}/>)
           }
        </div>
    )
}

export default Work_Flow