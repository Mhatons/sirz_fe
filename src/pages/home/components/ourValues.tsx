import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CoreValues() {

    const settings = {
        infinite: true,
        slidesToShow: 4,
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

    const coreValues = [
        {
            title: "Integrity",
            description: "We uphold honesty and transparency in all our dealings.",
            icon: ""
        },
        {
            title: "Knowledge",
            description: "Continuous learning and sharing of valuable insights.",
            icon: ""
        },
        {
            title: "Client-Centered",
            description: "Personalised and exceptional service for every client.",
            icon: ""
        },
        {
            title: "Professionalism",
            description: "High standards of conduct and excellence.",
            icon: ""
        },
        {
            title: "Commitment",
            description: "Dedication to our mission and goals.",
            icon: ""
        },
        {
            title: "Innovation",
            description: "Embracing new ideas and technologies.",
            icon: ""
        },
        {
            title: "Community",
            description: "Fostering a supportive and collaborative environment.",
            icon: ""
        },
    ];
    return (
        <div className="  bg-background_light dark:bg-background_dark dark:text-white pt-12 pb-8">
            <header className=" text-center pb-4 sm:w-[60%] w-[90%] m-auto">
                <h4 className=' text-[30px] pb-2'> We Deliver on our Word</h4>
                <div className='text-lg text-zinc-500'>Our expert designers bring a wealth of experience from transforming spaces for a diverse range of residential, commercial, and corporate clients.</div>
                <div className=' text-primary text-[20px] pt-3'>Check our core values below</div>
            </header>
            <ul className=" p-4 text-[14px] font-comfortaa ">
                <Slider {...settings}>
                    {
                        coreValues.map((value, index) => (
                            <div className=' px-2'>
                                <li key={index} className=" shadow-inner rounded-lg px-4 py-2 h-24 border">
                                    <header className=" text-primary_dark text-[20px] font-semibold  pb-1 rounded-sm">{value.title}</header>
                                    <div>{value.description}</div>
                                </li>
                            </div>
                        ))
                    }
                </Slider>
            </ul>
        </div>
    )
}