import { useEffect, useRef } from "react";
import { VIDEO } from "../../../assets";

export default function AboutUs() {

    const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly type the ref

    useEffect(() => {
        if (videoRef.current) {
            // Set the playback speed
            videoRef.current.playbackRate = 0.5; // Adjust the speed (e.g., 0.5 for half-speed)
        }
    }, []);

    return (
        <div>
            <section className="pt-16 ">
                <h2 className="text-3xl text-center font-bold mb-0 text-primary font-comfortaa ">About Us</h2>
                <div className="sm:grid grid-cols-2 max-sm:flex-col sm:w-[80%] w-[90%] m-auto gap-16 mb-5 py-14">
                    <div className=" relative sm:h-[500px] h-[450px] ">
                        {/* <img src={IMAGES.sampleImage} alt="" className="w-full h-full transform scale-x-[-1] object-cover rounded-3xl" /> */}
                        <video
                            ref={videoRef}
                            className=' top-0 h-full z-0 object-cover w-full'
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload='auto'
                        >
                            <source src={VIDEO.CURTAIN_VIDEO} type="video/mp4" className="  object-cover" />
                            Your browser does not support the video tag.
                        </video>
                        {/* <div className=" text-center font-comfortaa p-4 shadow-lg mt-[-2em] absolute right-0 left-0 rounded-2xl text-md font-extrabold sm:w-[75%] m-auto bg-[#fff] z-10 text-[#AB4412]">
                            Henry E. E. - Real Estate Expert, GIS Specialist, and Surveyor
                        </div> */}
                    </div>
                    <div className=" ">
                        <div className=" max-sm:pt-8 font-comfortaa text-[13px] text-justify ">
                            <p className="">
                                Haven & Hive Interiors is a dynamic interior design company dedicated to transforming living and workspaces with a perfect blend of style, functionality, and quality.
                                Founded by <b>Faruna Anthony Achile</b> in 2019, our company is driven by a passion for creating elegant and comfortable interiors that reflect the unique personalities and needs of our clients.
                                We believe that great design should be both aesthetically pleasing and practical, enhancing the way people experience their spaces.
                            </p>
                            <p className="pt-3">
                                At Haven & Hive Interiors, we specialize in rebranding and upgrading locally made furniture, curtains and window blinds, ensuring that Nigerian craftsmanship meets and surpasses international standards.
                                By refining quality, incorporating modern design trends, and utilizing superior materials, we make high-end furniture, curtains, and window blinds more accessible and affordable.
                                Our mission is to provide Nigerians with world-class interior solutions without the excessive cost of imported alternatives.
                            </p>
                            <p className="pt-3">
                                With a commitment to excellence, innovation, and customer satisfaction, Haven & Hive Interiors is shaping the future of interior design in Nigeria. 
                                We collaborate with skilled artisans, leverage cutting-edge techniques, and continuously refine our offerings to create timeless, functional, and inspiring spaces. 
                                Whether it’s a residential or commercial project, we bring creativity and precision to every detail, turning visions into reality.
                            </p>
                        </div>
                        {/* <div className="sm:w-1/2">
                            <Button onClick={() => { }} text="Get Started now" />
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}