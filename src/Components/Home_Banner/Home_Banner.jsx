import React from 'react'
import Slider from 'react-slick'
import Carusal from './Carusal'

const Home_Banner = () => {
    const banner = [
        {
            _id: '001',
            title: 'Everyone Loves a Green Gift',
            para: "Plants, bouquets, and biophilic decor of all stripes and sizes delivered to their doorstep—happiness guaranteed.",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/slider-1.jpg"
        },
        {
            _id: '002',
            title: 'Uncomplicate Indoor Gardening',
            para: "Plants, bouquets, and biophilic decor of all stripes and sizes delivered to their doorstep—happiness guaranteed.",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/slider-2.jpg"
        },
        {
            _id: '003',
            title: 'Everyone Loves a Green Gift',
            para: "Plants, bouquets, and biophilic decor of all stripes and sizes delivered to their doorstep—happiness guaranteed.",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/slider-3.jpg"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
    }
    return (
        <div className=' overflow-hidden'>
            <Slider {...settings}>
                {
                    banner.map(itme => <Carusal key={itme._id} item={itme}/>)
                }
            </Slider>
        </div>
    )
}

export default Home_Banner