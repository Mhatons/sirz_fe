import { useEffect, useRef } from 'react';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hook';
import { allReduxSliceInfo } from '../../features/reduxSlice';
import { ROUTES } from '../../constants/routes/desc';
import { IMAGES, VIDEO } from '../../assets';
import Slider from 'react-slick';
import { GiThreeFriends } from 'react-icons/gi';
import { HiOutlineShare } from 'react-icons/hi2';
import { PiMoneyWavyLight } from 'react-icons/pi';
import { TbUserCode } from 'react-icons/tb';

export default function Referral() {
    const { isDarkMode } = useAppSelector(allReduxSliceInfo);
    const navigate = useNavigate()
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 3,
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

    const onbording = [
        {
            title: "Get your Unique code",
            description: "Sign up and get your unique referral link",
            icon: <TbUserCode />
        },
        {
            title: "Share Your Link",
            description: "share with your referral link with friends and potential clients.",
            icon: <HiOutlineShare />
        },
        {
            title: "Your Friends Join",
            description: "Your friends sign up using your referral link and complete their first Purchace.",
            icon: <GiThreeFriends />
        },
        {
            title: "Earn Rewards",
            description: "Get rewarded for every successful purchase they make. It’s that simple!",
            icon: <PiMoneyWavyLight />
        },
    ];

    const reviews = [
        {
            review: "Referring my friends was so easy, and I earned rewards instantly! Highly recommend.",
            name: "Chidinma Okeke" // Igbo
        },
        {
            review: "This is the best referral program I’ve ever joined. The rewards just keep coming!",
            name: "Abubakar Suleiman" // Hausa
        },
        {
            review: "I love the fact that my earnings increase every time my referral makes a purchase. Amazing!",
            name: "Bola Adeyemi" // Yoruba
        },
        {
            review: "Haven & Hive Interiors truly values their customers. It’s a win-win for everyone.",
            name: "Efe Ighodaro" // Urhobo
        },
        {
            review: "I told my friends about this, and now we’re all earning! Such a great initiative.",
            name: "Fatima Garba" // Fulani
        },
        {
            review: "Very straightforward process! I got my first referral bonus within days.",
            name: "Emeka Nwosu" // Igbo
        },
        {
            review: "This program has been a blessing! I’ve earned so much just by sharing my link.",
            name: "Aminu Danjuma" // Hausa
        },
        {
            review: "Highly recommend this to anyone looking to make extra income effortlessly.",
            name: "Titilope Odetola" // Yoruba
        },
        {
            review: "It’s refreshing to see a company that rewards loyalty like this.",
            name: "Idongesit Udoh" // Ibibio
        },
        {
            review: "Haven & Hive Interiors has made earning rewards so easy and stress-free!",
            name: "Oghenekaro Ovie" // Itsekiri
        }
    ];


    return (
        <div>
            <section className={` hero_bg min-h-screen h-screen relative`}>
                <div className={`h-full w-full  ${!isDarkMode && "backgroundGradient"} z-10 absolute flex items-center `}>
                    <div className="text-left max-w-[90%] m-auto sm:pt-48 pt-60 max-sm:m-auto ">
                        <div className=' max-sm:ps-3'>
                            <h1 className="sm:text-[55px] sm:max-w-[65%] leading-snug text-[40px] tracking-wider text-background_dark text-left max-sm:font-light dark:text-zinc-200 ">Refer & Earn</h1>
                        </div>
                        <div className=' max-sm:px-2 max-sm:text-center m-auto'>
                            <div className='flex items-center w-full py-5  '>
                                <div className="h-[1px] dark:bg-zinc-400 bg-[#424242] flex-grow"></div>
                            </div>
                            <div className='grid sm:grid-cols-7 gap-4'>
                                <div className=' col-span-5'>
                                    <p className="text-lg max-sm:text-sm max-sm:leading-6 tracking-wide text-justify text-black dark:text-white font-comfortaa sm:my-4">
                                        Invite your friends to join and patronize us and earn amazing rewards for each successful purchase they make using your referal code.
                                    </p>
                                </div>

                                <div className=" flex items-center justify-center col-span-2 ">
                                    <div onClick={() => navigate(ROUTES.CONTACT.PATH)} className=' heroButtonContainer relative border sm:w-[60%] w-[180px] cursor-pointer h-24 rounded-lg dark:text-white text-white max-sm:text-primary_dark border-white max-sm:border-primary_dark dark:border-white  items-start gap-3'>
                                        <p className=' absolute bottom-1 left-1 mt-6 text-lg '>Contact Us</p>
                                        <CgArrowsExpandUpRight className=' heroButton  absolute ' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <video
                    ref={videoRef}
                    className=' absolute top-0 h-full z-0 object-cover w-full'
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload='auto'
                >
                    <source src={VIDEO.REFERRAL_VIDEO} type="video/mp4" className="  object-cover" />
                    Your browser does not support the video tag.
                </video>
                {
                    isDarkMode && (
                        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#000000a8]"></div>
                    )
                }
            </section>

            <section className=' pt-10'>
                <section>
                    <div className='w-[87%] m-auto'>
                        <header className='text-left sm:text-[40px] text-[25px] border-b-[1.3px] pb-3 border-primary text-[#424242] dark:text-zinc-300'>How it Works</header>
                        <div className=' text-zinc-600 dark:text-zinc-400 text-justify sm:grid grid-cols-2 gap-10 sm:text-lg text-[16px] py-8'>
                            <p>
                                At Haven & Hive Interiors, we believe in rewarding our valued customers for spreading the word about our exceptional goods and services. Our referral program is simple and generous: when you refer someone to Haven & Hive Interiors, you earn 5% of every purchase they make, whether it’s for our exquisite products or our professional services. The best part? This offer is indefinite, meaning you continue to earn 5% on every transaction your referral makes for as long as they remain a customer with us.                            </p>
                            <p className=' max-sm:pt-4'>
                                Every time your referral shops with us, your rewards grow. Whether they are furnishing a home, renovating a space, or simply purchasing our premium decor items, you will be rewarded for their loyalty. This program allows you to enjoy ongoing benefits while helping your friends and family discover high-quality interior solutions from Haven & Hive Interiors. It’s our way of saying thank you for helping us expand our community and sharing the beauty we create.                            </p>
                        </div>
                    </div>
                </section>

                < section className=" max-sm:pb-8 pt-0 max-sm:bg-[#ddd] dark:max-sm:bg-[#0f0e0e]" >
                    <div className="h-[500px] relative bg-[#f96a0a]">
                        <img src={IMAGES.teamImgBlackWhite} alt="" className="w-full h-full object-cover object-center opacity-75 " />
                    </div>
                    <div className="grid lg:grid-cols-4 xxl:grid-cols-2 mt-[-6em] left-0 right-0 xxl:absolute w-[90%] m-auto gap-5">
                        {
                            onbording.map((item, index: number) => (
                                <div key={index} className={`bg-[#fff] dark:bg-background_dark ${!index && " max-sm:z-50"} sm:shadow-lg hover:transform hover:-translate-y-2 transition duration-300  cursor-pointer text-center rounded-2xl p-8 flex items-center justify-center`}>
                                    <div className="flex items-center justify-center flex-col">
                                        <div className=' text-[40px] text-[#F29254]'>
                                            {item.icon}
                                        </div>
                                        <header className="text-[#F29254] font-comfortaa py-3 font-extrabold text-[17px]">{item.title}</header>
                                        <div className="text-sm font-comfortaa">{item.description}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section >

                <section className=' sm:pt-36'>
                    <section className="container mx-auto sm:px-4 py-16">
                        <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>

                        <ul className=" py-4 sm:px-4 text-[14px] font-comfortaa ">
                            <Slider {...settings}>
                                {
                                    reviews.map((review, index) => (
                                        <div className=' sm:px-2'>
                                            <div key={index} className="bg-background_light dark:bg-background_dark rounded-lg p-6 transition duration-300">
                                                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                                                    {review.review}
                                                </p>
                                                <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-400">— {review.name}</h3>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </ul>
                    </section>
                </section>
            </section>
        </div>
    )

}