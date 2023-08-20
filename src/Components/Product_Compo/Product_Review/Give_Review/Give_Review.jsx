import React from 'react';

const Give_Review = () => {
    const handleReview = e=>{
        e.preventDefault()
        const review = e.target.review.value;
    
    }
    return (
        <div className='w-3/5 mt-10 '>
            <div>

            </div>
            <form onSubmit={handleReview}>
                <textarea className='border w-full h-20 px-4 py-2 outline-none'  name="review" id="review" placeholder='Enter Your Exparience With This Product'>

                </textarea>
                <input className='py-2 bg-green-900 text-lg font-semibold text-white w-full cursor-pointer ' type="submit" value="Submit Your Review" />
            </form>
        </div>
    );
};

export default Give_Review;