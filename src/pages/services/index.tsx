import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hook';
import { allReduxSliceInfo } from '../../features/reduxSlice';
import { ServiceDetails } from '../../constants/serviceMenu';
import { ROUTES } from '../../constants/routes/desc';
import { IMAGES } from '../../assets';
import { BsChevronDoubleRight } from 'react-icons/bs';

export default function Services() {
    const { isDarkMode } = useAppSelector(allReduxSliceInfo);
    const navigate = useNavigate();
    const { title } = useParams();

    const service = ServiceDetails.find(
        (item) => item.title === title
    );

    if (!service) {
        return <h1>Service not found</h1>;
    }

    const handleServiceClick = (title: string) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/services/${title}`);
    }



    return (
        <div>
            <section className={` min-h-screen h-screen relative`}>
                <div className={`h-full w-full  ${!isDarkMode && "backgroundGradient"} z-10 absolute flex items-center `}>
                    <div className="text-left max-w-[90%] m-auto sm:pt-48 pt-60 max-sm:m-auto ">
                        <div className=' max-sm:ps-3'>
                            <h1 className="sm:text-[55px] sm:max-w-[65%] leading-snug text-[40px] tracking-wider text-background_dark text-left max-sm:font-light dark:text-zinc-200 ">{service.title}</h1>
                        </div>
                        <div className=' max-sm:px-2 max-sm:text-center m-auto'>
                            <div className='flex items-center w-full py-5  '>
                                <div className="h-[1px] dark:bg-zinc-400 bg-[#424242] flex-grow"></div>
                            </div>
                            <div className='grid sm:grid-cols-7 gap-4'>
                                <div className=' col-span-5'>
                                    <p className="text-lg max-sm:text-sm max-sm:leading-6 tracking-wide text-justify text-black dark:text-white font-comfortaa sm:my-4">
                                        {service.description}
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
                <img
                    src={service.image}
                    alt="industial service"
                    className='absolute top-0 h-full z-0 object-cover w-full'
                />
                {
                    isDarkMode && (
                        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#000000a8]"></div>
                    )
                }
            </section>

            <section className='pt-10 '>
                <div>
                    <div className=' sm:h-96 h-64 overflow-y-scroll hideScrollBar mt-5 flex items-center justify-center rounded-e-full lg:w-[50%] md:w-[70%] w-[95%] dark:bg-background_dark bg-background_light'>
                        <div className=' w-[90%] max-h-[90%] h-auto sm:text-[14px] leading-7 font-comfortaa text-[12px]'>
                            <header className=' capitalize sm:text-[25px] max-w-[70%] text-[18px] sm:pb-4 pb-2'>{service.sections[0].title}</header>
                            {service.sections[0].description}
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <div className=' sm:h-96 h-64 sm:mt-5 mt-10 flex  overflow-hidden items-center justify-center rounded-s-full lg:w-[50%] md:w-[70%] w-[95%]'>
                            <img src={service.sections[0].image} alt="" className=' object-cover h-full w-full' />
                        </div>
                    </div>

                    <div className=' sm:h-96 h-64 overflow-y-scroll hideScrollBar sm:mt-5 mt-10  flex items-center justify-center rounded-e-full lg:w-[50%] md:w-[70%] w-[95%] dark:bg-background_dark bg-background_light'>
                        <div className=' w-[90%] max-h-[90%] h-auto sm:text-[14px] leading-7 font-comfortaa text-[12px]'>
                            <header className=' capitalize sm:text-[25px] max-w-[70%] text-[18px] sm:pb-4 pb-2'>{service.sections[1].title}</header>
                            {service.sections[1].description}
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <div className=' sm:h-96 h-64 sm:mt-5 mt-10 flex  overflow-hidden items-center justify-center rounded-s-full lg:w-[50%] md:w-[70%] w-[95%]'>
                            <img src={service.sections[1].image} alt="" className=' object-cover h-full w-full' />
                        </div>
                    </div>
                </div>

                <div
                    style={{ backgroundImage: `url(${IMAGES.solutionImageTwo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    className=' mt-20 relative'
                >
                    <div className=' py-10 text-white bg-[#000000a8]'>
                        <header className=' max-w-[80%] m-auto sm:text-[30px] text-[25px]  text-center pb-8 capitalize text-secondary_light '>Other Services You may interested in</header>
                        <ul className=" lg:grid-cols-3 sm:grid-cols-2 sm:w-[80%] text-justify m-auto grid text-sm gap-3 ">
                            {ServiceDetails?.map((item, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer whitespace-nowrap my-1 ps-10 flex items-center gap-3 tracking-wider  hover:text-secondary_light"
                                    onClick={() => { handleServiceClick(item.title) }}
                                >
                                    <BsChevronDoubleRight />
                                    {item?.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )

}