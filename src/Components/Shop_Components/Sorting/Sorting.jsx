import React from 'react';

const Sorting = (cards) => {
    return (
        <div className='flex justify-between items-center w-full'>
            <p>Showing All {cards.length} Result</p>
            <button className='px-8 py-2 border-2 border-black font-serif'>Sort By Category</button>
        </div>
    );
};

export default Sorting;