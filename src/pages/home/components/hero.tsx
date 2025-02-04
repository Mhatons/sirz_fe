import { useAppSelector } from "../../../app/hook";
import { allReduxSliceInfo } from "../../../features/reduxSlice";
import { useEffect, useRef } from 'react';
import spinImg from '../../../assets/images/Haven___Hive_logomark_2-removebg-preview.png';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes/desc';
import { VIDEO } from "../../../assets";

export default function Hero() {
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
        <section className={` min-h-screen h-screen relative`}>
            <div className={`h-full w-full  ${!isDarkMode && "backgroundGradient"} z-10 absolute flex items-center `}>
                <div className="text-left max-w-[90%] m-auto sm:pt-32 pt-24 max-sm:m-auto ">
                    <div className=' max-sm:ps-3'>
                        <h1 className="sm:text-[55px] sm:max-w-[65%] leading-snug text-[40px] tracking-wider text-background_dark text-left max-sm:font-light dark:text-zinc-200 ">Haven & Hive Interiors</h1>
                        <div className="sm:text-[25px] sm:max-w-[65%] pt-2 text-[17px] tracking-wider text-left font-light ">Crafting spaces, Shaping Future</div>
                    </div>
                    <div className=' max-sm:px-2 max-sm:text-center m-auto max-sm:pt-7 pt-14'>
                        <div className='flex items-center w-full  '>
                            <div className="h-[1px] dark:bg-white bg-[#424242] flex-grow"></div>
                            <div className="w-8 h-8 border-white  rounded-full   mx-1">
                                <img src={spinImg} alt="" className=' object-cover rounded-full  animate-spinSlow' />
                            </div>
                            <div className="h-[1px] dark:bg-white bg-[#424242] flex-grow"></div>
                        </div>
                        <div className='grid sm:grid-cols-7 gap-4'>
                            <div className=' col-span-5'>
                                <p className="text-lg max-sm:text-sm max-sm:leading-7 tracking-wide text-justify text-black dark:text-white font-comfortaa sm:my-4">
                                    We offer a full spectrum of services from initial concept to final execution, and
                                    We're dedicated to providing comprehensive interior design services that blend functionality with aesthetic appeal
                                </p>
                                <div className=" dark:text-zinc-400 max-sm:hidden text-zinc-600 max-sm:text-[16px] text-justify font-normal">Integrity | Professionalism | Eco-friendly | Client-Centered </div>
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
                <source src={VIDEO.HOME_HERO_VIDEO} type="video/mp4" className="  object-cover" />
                Your browser does not support the video tag.
            </video>
            {
                isDarkMode && (
                    <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#000000a8]"></div>
                )
            }
        </section>
    )

}