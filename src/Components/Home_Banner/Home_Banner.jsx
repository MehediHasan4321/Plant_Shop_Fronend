import React from 'react'

const Home_Banner = () => {
    return (
        <div className='w-full h-[70vh]' style={{ backgroundImage: "url('https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/slider-1.jpg')" }}>
            <div className='container mx-auto flex justify-start items-center h-full'>
                <div className='w-2/5 space-y-7'>
                    <h1 className='text-7xl font-semibold'>Everyone Loves a <br/>Green Gift </h1>
                    <p>Plants, bouquets, and biophilic decor of all stripes and sizes delivered to their 
                        <br/>
                        doorstep—happiness guaranteed.
                    </p>
                    <button className='px-8 py-3 bg-[#313232] text-white font-semibold'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Home_Banner