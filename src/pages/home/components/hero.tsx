import { useEffect, useRef } from "react";
import { useAppSelector } from "../../../app/hook";
import { slatedFrameImg, starFullImg, StarMultiple, StarMultipleSmall, videos } from "../../../assets";
import Button from "../../../components/common/button";
import { allReduxSliceInfo } from "../../../features/reduxSlice";

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
        <section className={` min-h-screen h-screen dark:bg-colorDefaultDark relative`}>
            <section className={`absolute ${!isDarkMode && "backgroundGradient"} z-10 top-0 bottom-0 left-0 right-0 pt-10 flex items-end`}>
                <div className=" pb-20">
                    <div className=" relative text-left sm:w-[80%] w-[90%] m-auto pt-10">
                        <header className="sm:text-[40px] text-[35px] max-sm:text-center relative z-10 leading-tight sm:font-bold">Power Up Your <i className=" text-colorBlueDeep">Brand</i> with Expert <br /> E-commerce, Branding & Marketing <br className=" max-sm:hidden" /> Solutions!</header>
                        <div className="sm:w-[30%] w-[70%] max-sm:m-auto py-6 max-sm:pt-10">
                            <Button text="Get started" onClick={() => { }} />
                        </div>
                        <img src={starFullImg} alt="" className='absolute top-3 sm:left-[-30px] left-[-20px] w-[100px] animate-spinSlow' />
                    </div>
                    <div>
                        <img src={slatedFrameImg} alt="" className="" />
                    </div>
                </div>

                <div className=" absolute bottom-20 right-3">
                    <img src={StarMultipleSmall} alt="" className="animate-spinSlow" />
                </div>
            </section>
            <div className=" absolute top-6 z-10 right-3">
                <img src={StarMultiple} alt="" className="animate-spinSlow" />
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
                <source src={videos.HomeBg} type="video/mp4" className=" object-cover" />
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