import { useEffect, useRef } from 'react';
import { slatedFrameImg, starFullImg } from "../../../assets";
import Button from "../../../components/common/button";
import PlainCard from "../../../components/layout/cards/plainCard";

const cardContent = [
    {
        title: "Customized Strategies",
        description: "No cookie-cutter solutions here! We tailor every strategy to fit your business needs, ensuring you get the best results for your brand’s growth."
    },
    {
        title: "Dedicated Support",
        description: "Forget bots—our expert team is here to guide you every step of the way. We are real people, with real solutions and we deliver real success!"
    },
    {
        title: "Proven Growth",
        description: "We don’t just promise results—we deliver them. Our data-driven approach has helped businesses scale and thrive in the digital space. Yours is next!"
    },
]

export default function Hero() {
    // const videoRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly type the ref

    useEffect(() => {
        if (videoRef.current) {
            // Set the playback speed
            videoRef.current.playbackRate = 0.5; // Adjust the speed (e.g., 0.5 for half-speed)
        }
    }, []);
    return (
        <section className={` bg-colorLight dark:bg-colorDefaultDark relative`}>
            <section className=" relative text-center sm:w-[70%] w-[90%] m-auto pt-10">
                <header className="sm:text-[50px] text-[30px] leading-tight font-bold">Power Up Your <i className=" text-colorBlueDeep">Brand</i> with Expert <br /> E-commerce, Branding & Marketing <br /> Solutions!</header>
                <div className="sm:w-[30%] w-[80%] py-6 m-auto">
                    <Button text="Get started" onClick={() => { }} />
                </div>
                <img src={starFullImg} alt="" className='absolute top-0' />
            </section>
            <section>
                <img src={slatedFrameImg} alt="" />
            </section>
            <section className="">
                <div className=" grid sm:grid-cols-3 gap-5 w-[90%] py-8 m-auto">
                    {
                        cardContent.map((item, index) => (
                            <div key={index}>
                                <PlainCard
                                    title={item.title}
                                    description={item.description}
                                />
                            </div>
                        ))
                    }
                </div>
            </section>
        </section>
    )

}