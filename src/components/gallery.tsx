// src/components/Gallery.js
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import screenshot1 from '../assets/Screenshot_8.webp';
import screenshot2 from '../assets/Screenshot_9.webp';

export default function Gallery() {
    const images = [
        screenshot1,
        screenshot2,
    ];

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
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
        <section className="">
            <h3 className="text-2xl sm:text-[30px] font-bold font-comfortaa text-[#ddd] text-center mb-4">Screenshots of Trading Results</h3>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="px-2 w-full sm:h-[400px] h-[350px]">
                        <img src={src} alt={`Trading Result ${index + 1}`} className="sm:rounded-lg w-full h-full" />
                    </div>
                ))}
            </Slider>
        </section>
    );
};









// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import analysisVideo from '../assets/playback-1.mp4';
// import analysisPicture from '../assets/4_Show_hide_market_data_in_the_instrument_04939f721c_2fbfaa7137.gif';

// export default function Gallery() {
//     const slides = [
//         { type: 'image', src: analysisPicture },
//         { type: 'video', src: analysisVideo },
//     ];

//     const settings = {
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         dots: true,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <section className="w-[80%] pb-8 pt-16 m-auto">
//             <h3 className="text-2xl sm:text-[40px] font-bold font-comfortaa text-[#ddd] text-center mb-4">
//                 Screenshots of Trading Results
//             </h3>
//             <Slider {...settings}>
//                 {slides.map((slide, index) => (
//                     <div key={index} className="p-2 w-full h-[350px]">
//                         {slide.type === 'image' ? (
//                             <img
//                                 src={slide.src}
//                                 alt={`Trading Result ${index + 1}`}
//                                 className="sm:rounded-lg object-contain w-full h-full"
//                             />
//                         ) : (
//                             // <video
//                             //     src={slide.src}
//                             //     controls
//                             //     className="sm:rounded-lg object-contain w-full h-full"
//                             // />
//                             <video className='sm:rounded-lg object-cover w-full h-full' autoPlay loop muted playsInline >
//                                 <source src={slide.src} type="video/mp4" />
//                                 Your browser does not support the video tag.
//                             </video>
//                         )}
//                     </div>
//                 ))}
//             </Slider>
//         </section>
//     );
// }