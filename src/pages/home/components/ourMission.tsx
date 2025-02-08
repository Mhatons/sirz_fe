import { useEffect, useRef } from "react";
import { IMAGES, VIDEO } from "../../../assets";

export default function OurMission() {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly type the ref

    useEffect(() => {
        if (videoRef.current) {
            // Set the playback speed
            videoRef.current.playbackRate = 0.5; // Adjust the speed (e.g., 0.5 for half-speed)
        }
    }, []);
    return (
        <div
            style={{ backgroundImage: `url(${IMAGES.overlayImage})`, backgroundSize: 'cover' }}
            className="bg-[#10333d] text-background_light pb-24 rounded-3xl"
        >
            <section className="pt-16">
                <h2 className="text-3xl text-center font-bold mb-0 text-secondary_light font-comfortaa ">Our Mission</h2>
                <div className="sm:grid grid-cols-2 max-sm:flex flex-col-reverse sm:w-[80%] w-[90%] m-auto gap-8 sm:pt-14">

                    <div className="">
                        <div className=" max-sm:pt-8 text-justify text-[13px] font-comfortaa ">
                            <p className="">
                                Haven & Hive Interiors is committed to redefining the interior design landscape in Nigeria by elevating the quality of locally crafted furniture and home décor.
                                We recognize the artistry and craftsmanship of Nigerian furniture makers and seek to bridge the gap between local production and international standards.
                                Through meticulous quality control, innovative design enhancements, and modern finishing techniques, we aim to reposition local furniture as a premium choice that rivals imported alternatives.
                            </p>
                            <p className="pt-3">
                                Our approach is centered on offering clients bespoke interior solutions that combine beauty, comfort, and affordability.
                                By integrating high-quality materials, contemporary design trends, and cutting-edge manufacturing techniques, we ensure that Nigerians have access to superior furniture, curtains, and window blinds at competitive prices.
                                Our goal is to enhance everyday living spaces with products that are both stylish and durable, tailored to meet the diverse preferences of our clientele.
                            </p>
                            <p className="pt-3">
                                Beyond providing exceptional interior design services, our long-term vision is to transform the perception of Nigerian-made furniture by fostering a culture of excellence in local production.
                                Through strategic partnerships, skill development initiatives, and continuous innovation, we aspire to create a brand synonymous with quality, elegance, and affordability.
                                Haven & Hive Interiors is not just designing spaces—we are shaping the future of Nigerian interiors, making luxury accessible to all.
                            </p>
                        </div>
                        {/* <div className="sm:w-1/2">
                            <Button onClick={() => { }} text="Get Started now" />
                        </div> */}
                    </div>
                    <div className=" relative sm:h-[500px] max-sm:pt-5 h-[450px] ">
                        <video
                            ref={videoRef}
                            className=' top-0 h-full z-0 object-cover w-full'
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload='auto'
                        >
                            <source src={VIDEO.MISSIONVIDEO} type="video/mp4" className="  object-cover" />
                            Your browser does not support the video tag.
                        </video>
                        {/* <div className=" text-center font-comfortaa p-4 shadow-lg mt-[-2em] absolute right-0 left-0 rounded-2xl text-md font-extrabold sm:w-[75%] m-auto bg-[#fff] z-10 text-[#AB4412]">
                            Henry E. E. - Real Estate Expert, GIS Specialist, and Surveyor
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}