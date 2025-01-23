import video from '../../../assets/images/3773486-hd_1920_1080_30fps.mp4';
import { useAppSelector } from "../../../app/hook";
import { allReduxSliceInfo } from "../../../features/reduxSlice";
import { useEffect, useRef } from 'react';
import spinImg from '../../../assets/images/Haven___Hive_logomark_2-removebg-preview.png'

export default function Hero() {
    const { isDarkMode } = useAppSelector(allReduxSliceInfo);
    // const videoRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly type the ref

    useEffect(() => {
        if (videoRef.current) {
            // Set the playback speed
            videoRef.current.playbackRate = 0.5; // Adjust the speed (e.g., 0.5 for half-speed)
        }
    }, []);
    return (
        // <div>
        //     <img src={hero_One_img} alt="" />
        // </div>

        <section className={` hero_bg min-h-screen h-screen relative`}>
            <div className={`h-full w-full  ${!isDarkMode && "backgroundGradient"} z-10 absolute flex items-center `}>
                <div className="text-left max-w-[95%] sm:pt-8 pt-14 max-sm:m-auto sm:ps-10">
                    <div>
                        <h1 className="sm:text-[50px] sm:max-w-[65%] text-[30px] max-sm:ps-4 text-left font-extrabold "><span className=' text-primary_dark dark:text-primary_light'>Haven & Hive </span> Interiors</h1>
                        <div className="sm:text-[25px] sm:max-w-[65%] text-[17px] max-sm:ps-4 font-comfortaa text-left font-extrabold ">Crafting spaces, Shaping Future</div>
                    </div>
                    <div className=' max-sm:px-2 max-sm:text-center m-auto max-sm:pt-10 pt-14'>
                        <div className='flex items-center w-full  '>
                            <div className="h-[1px] bg-white flex-grow"></div>
                            <div className="w-8 h-8 border-white  rounded-full   mx-4">
                                <img src={spinImg} alt="" className=' object-cover rounded-full  animate-spinSlow' />
                            </div>
                            <div className="h-[1px] bg-white flex-grow"></div>
                        </div>
                        <p className="text-lg text-black dark:text-white font-comfortaa my-4">
                            Haven & Hive Interiors is poised to become a premier interior design firm in Nigeria, offering a full spectrum of services from initial concept to final execution.
                            We're dedicated to providing comprehensive interior design services that blend functionality with aesthetic appeal
                        </p>
                        <b className=" dark:text-zinc-400 text-zinc-600 max-sm:text-sm  font-normal">Integrity | Professionalism | Eco-friendly | Client-Centered </b>
                        <div className='  sm:float-right pt-4 max-sm:flex items-center justify-center '>
                            <button className={` font-comfortaa tracking-widest
                            border-[#F29254] border text-[#ffffff] px-16  rounded-full 
                            'w-full flex align-center justify-center py-4 cursor-pointer text-sm font-bold hover:bg-transparent floating-button `}
                            >
                                Contact us
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <video
                ref={videoRef}
                className=' absolute top-0 h-screen z-0 object-cover w-full'
                autoPlay
                loop
                muted
                playsInline
                preload='auto'
            >
                <source src={video} type="video/mp4" className="  object-cover" />
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