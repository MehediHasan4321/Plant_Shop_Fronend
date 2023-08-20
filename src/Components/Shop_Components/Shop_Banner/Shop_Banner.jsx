import React, { useState } from 'react';
import Plants_Categorys from '../Plants_Categorys/Plants_Categorys';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Shop_Banner = () => {
    const [shopTitle, setShopTitle] = useState("Shop")
    const plant_Categorys = [
        {
            _id: "001",
            title: "Air Purifying",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-7.jpg"
        },
        {
            _id: "002",
            title: "Ceramic Pots",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-8.jpg"
        },
        {
            _id: "003",
            title: "Indoor Plants",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-10.jpg"
        },
        {
            _id: "004",
            title: "Low Maintainse",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-11.jpg"
        },
        {
            _id: "005",
            title: "Plant Bundle",
            image: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-12.jpg"
        }

    ]
    const handleShopTitle = title => {
        setShopTitle(title)
    }
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className='w-full h-[50vh]' style={{ backgroundImage: "url('https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/bg-breadcrumb.jpg')", backgroundRepeat: 'no-repeat' }}>
            <div className='container mx-auto flex flex-col justify-center items-end h-full'>
                <h1 className='text-5xl font-serif text-center mb-8'>{shopTitle}</h1>
                <div className='w-3/5'>
                    <Slider {...settings}>
                        {
                            plant_Categorys.map(plant => <Plants_Categorys clickEvent={handleShopTitle} key={plant._id} category={plant} />)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Shop_Banner;