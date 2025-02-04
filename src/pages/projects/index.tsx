import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes/desc";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { useAppSelector } from "../../app/hook";
import { allReduxSliceInfo } from "../../features/reduxSlice";
import { useEffect, useRef } from "react";
import { VIDEO } from "../../assets";
import ProjectCard from "../../components/layout/projectCards";
import { ProjectData } from "../../constants/projectData";

export default function Projects() {
    const navigate = useNavigate();
    const { isDarkMode } = useAppSelector(allReduxSliceInfo);

    const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly type the ref

    useEffect(() => {
        if (videoRef.current) {
            // Set the playback speed
            videoRef.current.playbackRate = 0.5; // Adjust the speed (e.g., 0.5 for half-speed)
        }
    }, []);



    return (
        <div>
            <section className={` min-h-screen h-screen relative`}>
                <div className={`h-full w-full  ${!isDarkMode && "backgroundGradient"} z-10 absolute flex items-center `}>
                    <div className="text-left max-w-[90%] m-auto sm:pt-48 pt-60 max-sm:m-auto ">
                        <div className=' max-sm:ps-3'>
                            <h1 className="sm:text-[55px] sm:max-w-[65%] leading-snug text-[40px] tracking-wider text-background_dark text-left max-sm:font-light dark:text-zinc-200 ">Our Recently Done Projects</h1>
                        </div>
                        <div className=' max-sm:px-2 max-sm:text-center m-auto'>
                            <div className='flex items-center w-full py-5  '>
                                <div className="h-[1px] dark:bg-zinc-400 bg-[#424242] flex-grow"></div>
                            </div>
                            <div className='grid sm:grid-cols-7 gap-4'>
                                <div className=' col-span-5'>
                                    <p className="text-lg max-sm:text-sm max-sm:leading-6 tracking-wide text-justify text-black dark:text-white font-comfortaa sm:my-4">
                                        Checkout the catalog of our recent projects below, cutting across different fields and sectors including commercial, residential, institutions and hospitalities.
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
                    <source src={VIDEO.SERVICE_HERO_VIDEO} type="video/mp4" className="  object-cover" />
                    Your browser does not support the video tag.
                </video>
                {
                    isDarkMode && (
                        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#000000a8]"></div>
                    )
                }
            </section>
            <section>
                <div className='w-[87%] m-auto pt-10'>
                    <header className='text-left sm:text-[40px] text-[25px] border-b-[1.3px] pb-3 border-primary text-[#424242] dark:text-zinc-300'>Overview</header>
                    <div className=' text-zinc-600 dark:text-zinc-400 text-justify sm:grid grid-cols-2 gap-10 sm:text-lg text-[16px] py-8'>
                        <p>
                            Haven and Hive Interiors is a premier interior design company based in Abuja, Nigeria, with a growing presence across Lagos, Asaba, Port Harcourt, and Anambra. Renowned for creating sophisticated and functional spaces, we bring a blend of creativity, elegance, and comfort to every project.
                        </p>
                        <p className=' max-sm:pt-4'>
                            From residential havens to commercial masterpieces, we pride ourselves on delivering designs that elevate lifestyles and redefine interiors. Whether it’s a chic private residence, a luxurious multiunit development, or a dynamic office or restaurant, we embrace every challenge with passion and precision.
                        </p>
                        <p className=' max-sm:pt-4'>
                            Experience the art of spatial transformation through our holistic approach to design. Witness the seamless interplay of styles, colors, and textures that define our work. Feel the harmony in every space, thoughtfully crafted to enhance your well-being and create a lasting impression.
                        </p>
                        <p className=' max-sm:pt-4'>
                            At Haven and Hive Interiors, balance is the cornerstone of our philosophy. When every element aligns perfectly, the result is not just a design—it’s a feeling. A space where everything feels just right.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-1 w-[90%] m-auto">
                    {
                        ProjectData.map((project, index) => (
                            <div onClick={() => navigate(`/project-details/${project.title}`)} key={index}>
                                <ProjectCard
                                    title={project.title}
                                    desc={project.description}
                                    image={project.image[0]}
                                />
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}