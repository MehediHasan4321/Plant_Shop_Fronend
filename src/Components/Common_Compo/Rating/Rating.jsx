import { BsFillStarFill, BsStar, BsStarHalf } from 'react-icons/bs';

const Rating = ({ rating = 0 }) => {
    const num = parseFloat(rating)
    if (num === 5) return <div className='flex gap-1 text-sm text-orange-400'><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /></div>
    if (num === 4.5) return <div className='flex gap-1 text-sm'><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsStarHalf /></div>
    if (num === 4) return <div className='flex gap-1 text-sm'><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsStar /></div>
    if (num === 3.5) return <div className='flex gap-1 text-sm'><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsStarHalf /><BsStar /></div>
    if (num === 3) return <div className='flex gap-1 text-sm'><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsStar /><BsStar /></div>
    if (num === 2.5) return <div className='flex gap-1 text-sm'><BsFillStarFill /><BsFillStarFill /><BsStarHalf /><BsStar /><BsStar /></div>
    if (num === 2) return <div className='flex gap-1 text-sm'><BsFillStarFill /><BsFillStarFill /><BsStar /><BsStar /><BsStar /></div>
    if (num === 1.5) return <div className='flex gap-1 text-sm'><BsFillStarFill /><BsStarHalf /><BsStar /><BsStar /><BsStar /></div>
    if (num === 1) { return <div className='flex gap-1 text-sm'><BsFillStarFill /><BsStar /><BsStar /><BsStar /><BsStar /></div> }
    else return <div className='flex gap-1 text-sm text-orange-300'><BsStar /><BsStar /><BsStar /><BsStar /><BsStar /></div>
};

export default Rating;