import React from 'react'

const Indoor_Gardening = () => {
    const info = [
        {
            _id:"001",
            image:"https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-2.jpg",
            title:"Planters on fleek!",
            description:"Driven by a committment to encourage creativity with greenery",
            
            
        },
        {
            _id:"002",
            image:"https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-3.jpg",
            title:"Gifts that Grow",
            description:"Driven by a committment to encourage creativity with greenery",
            
            
        }
    ]
    return (
        <div className='container mx-auto flex justify-between gap-5'>
            {
                info.map(item=><div key={item._id} className='w-1/2'>
                    <img className='w-full' src={item.image} alt={item.image} />
                    <div className='text-center mt-10 space-y-2'>
                        <h1 className="text-4xl font-serif">{item.title}</h1>
                        <p className='text-md font-semibold text-[#888C8C]'>{item.description}</p>
                        <button className='py-2 border-b-2'>Explore More</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Indoor_Gardening