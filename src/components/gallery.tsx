// src/components/Gallery.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Gallery() {
    const images = [
        'https://astroearning.com/assets/images/screenshot1-410x379.jpg',
        'https://astroearning.com/assets/images/screenshot5-886x879.jpg',
        'https://astroearning.com/assets/images/screenshot2-410x379.jpg',
        'https://astroearning.com/assets/images/screensho8-886x931.jpg',
    ];

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className=" w-[80%] py-8 m-auto ">
            <h3 className="text-2xl sm:text-[40px] font-bold font-comfortaa text-primary text-center mb-4">Screenshots of Trading Results</h3>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="p-2 w-full h-[350px]">
                        <img src={src} alt={`Trading Result ${index + 1}`} className="sm:rounded-lg w-full h-full" />
                    </div>
                ))}
            </Slider>
        </section>
    );
};
