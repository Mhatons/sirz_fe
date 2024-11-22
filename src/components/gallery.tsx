// src/components/Gallery.js
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Gallery() {
    const images = [
        'https://cdn5.vectorstock.com/i/1000x1000/23/39/crypto-currency-mining-farm-server-data-center-vector-20962339.jpg',
        'https://cdn5.vectorstock.com/i/1000x1000/23/39/crypto-currency-mining-farm-server-data-center-vector-20962339.jpg',
        'https://cdn5.vectorstock.com/i/1000x1000/23/39/crypto-currency-mining-farm-server-data-center-vector-20962339.jpg',
        'https://cdn5.vectorstock.com/i/1000x1000/23/39/crypto-currency-mining-farm-server-data-center-vector-20962339.jpg',
    ];
    // const images = [
    //     'https://astroearning.com/assets/images/screenshot1-410x379.jpg',
    //     'https://astroearning.com/assets/images/screenshot5-886x879.jpg',
    //     'https://astroearning.com/assets/images/screenshot2-410x379.jpg',
    //     'https://astroearning.com/assets/images/screensho8-886x931.jpg',
    // ];

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
        <section className=" w-[80%] pb-8 pt-16 m-auto ">
            <h3 className="text-2xl sm:text-[40px] font-bold font-comfortaa text-[#ddd] text-center mb-4">Screenshots of Trading Results</h3>
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
