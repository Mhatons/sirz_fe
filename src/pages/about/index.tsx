import { useEffect, useRef } from 'react';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hook';
import { allReduxSliceInfo } from '../../features/reduxSlice';
import { ROUTES } from '../../constants/routes/desc';
import { IMAGES, VIDEO } from '../../assets';

export default function About() {
    const { isDarkMode } = useAppSelector(allReduxSliceInfo);
    const navigate = useNavigate()
    // const videoRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly type the ref

    useEffect(() => {
        if (videoRef.current) {
            // Set the playback speed
            videoRef.current.playbackRate = 0.5; // Adjust the speed (e.g., 0.5 for half-speed)
        }
    }, []);
    return (
        <div>
            <section className={` hero_bg min-h-screen h-screen relative`}>
                <div className={`h-full w-full  ${!isDarkMode && "backgroundGradient"} z-10 absolute flex items-center `}>
                    <div className="text-left max-w-[90%] m-auto sm:pt-48 pt-60 max-sm:m-auto ">
                        <div className=' max-sm:ps-3'>
                            <h1 className="sm:text-[55px] sm:max-w-[65%] leading-snug text-[40px] tracking-wider text-background_dark text-left max-sm:font-light dark:text-zinc-200 ">About Us</h1>
                        </div>
                        <div className=' max-sm:px-2 max-sm:text-center m-auto'>
                            <div className='flex items-center w-full py-5  '>
                                <div className="h-[1px] dark:bg-zinc-400 bg-[#424242] flex-grow"></div>
                            </div>
                            <div className='grid sm:grid-cols-7 gap-4'>
                                <div className=' col-span-5'>
                                    <p className="text-lg max-sm:text-sm max-sm:leading-6 tracking-wide text-justify text-black dark:text-white font-comfortaa sm:my-4">
                                        We are a highly dedicated team of interior design professionals offering expert guidance and innovative solutions to transforming spaces to elegant havens
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
                    <source src={VIDEO.ABOUT_HERO_VIDEO} type="video/mp4" className="  object-cover" />
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
                        <header className='text-left sm:text-[40px] text-[25px] border-b-[1.3px] pb-3 border-primary text-[#424242] dark:text-zinc-300'>Welcome to Haven and Hive Interiors</header>
                        <div className=' text-zinc-600 dark:text-zinc-400 text-justify sm:grid grid-cols-2 gap-10 sm:text-lg text-[16px] py-8'>
                            <p>
                                Haven & Hive Interiors is poised to become a premier interior design firm in Nigeria, offering a full spectrum of services from initial concept to final execution. Our mission is to deliver seamless and stress-free interior solutions to clients in Abuja, Lagos, Port Harcourt, and Anambra, with plans for nationwide expansion. Leveraging a team of skilled professionals and a commitment to excellence, we aim to transform spaces and exceed client expectations.
                            </p>
                            <p className=' max-sm:pt-4'>
                                Haven & Hive Interiors is dedicated to providing comprehensive interior design services that blend functionality with aesthetic appeal. We strive to create environments that reflect our clients' personalities and needs, ensuring satisfaction through meticulous attention to detail and innovative design solutions. Our long-term vision includes expanding our services to encompass complete building projects and developing a line of customized interior products under our brand.
                            </p>
                        </div>
                    </div>
                    <img src={IMAGES.serviceDropImg} alt="" className=' xxl:h-[500px] object-cover w-full' />
                </section>

                <section className='w-[87%] pt-14 m-auto'>
                    <header className='text-left sm:text-[40px] text-[25px] pb-3 border-primary text-[#424242] dark:text-zinc-300 capitalize'>We're exeperts in the interior space</header>
                    <p>With years of experience and a deep understanding of the job market, our team of experts provides personalised career mentoring to help individuals achieve their professional goals. To access our expertise, individuals can choose from the following options:</p>
                </section>


                <section className=' bg-background_light dark:bg-background_dark mt-14 pb-16'>
                    <div className='w-[87%] pt-10 m-auto'>
                        <header className='text-left sm:text-[40px] text-[25px] border-b-[1.3px] pb-3 border-primary capitalize text-rose-700 dark:text-rose-500'>Get rich with our referral program</header>
                        <div className=' text-zinc-600 dark:text-zinc-300 text-justify sm:grid grid-cols-2 gap-10 sm:text-lg text-[16px] py-8'>
                            <p>
                                Haven & Hive Interiors is poised to become a premier interior design firm in Nigeria, offering a full spectrum of services from initial concept to final execution. Our mission is to deliver seamless and stress-free interior solutions to clients in Abuja, Lagos, Port Harcourt, and Anambra, with plans for nationwide expansion. Leveraging a team of skilled professionals and a commitment to excellence, we aim to transform spaces and exceed client expectations.
                            </p>
                            <p className=' max-sm:pt-4'>
                                Haven & Hive Interiors is dedicated to providing comprehensive interior design services that blend functionality with aesthetic appeal. We strive to create environments that reflect our clients' personalities and needs, ensuring satisfaction through meticulous attention to detail and innovative design solutions. Our long-term vision includes expanding our services to encompass complete building projects and developing a line of customized interior products under our brand.
                            </p>
                        </div>
                    </div>
                    <img src={IMAGES.solutionImageThree} alt="" className=' xxl:h-[500px] object-cover w-full' />
                </section>
            </section>
        </div>
    )

}