import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hook';
import { allReduxSliceInfo } from '../../../features/reduxSlice';
import { ROUTES } from '../../../constants/routes/desc';
import { ServiceDetails } from '../../../constants/serviceMenu';

export default function DesignConsultation() {
    const { isDarkMode } = useAppSelector(allReduxSliceInfo);
    const navigate = useNavigate()

    return (
        <section className={` hero_bg min-h-screen h-screen relative`}>
            <div className={`h-full w-full  ${!isDarkMode && "backgroundGradient"} z-10 absolute flex items-center `}>
                <div className="text-left max-w-[90%] m-auto sm:pt-48 pt-60 max-sm:m-auto ">
                    <div className=' max-sm:ps-3'>
                        <h1 className="sm:text-[55px] sm:max-w-[65%] leading-snug text-[40px] tracking-wider text-background_dark text-left max-sm:font-light dark:text-zinc-200 ">{ServiceDetails.InteriorDesignConsultation.title}</h1>
                    </div>
                    <div className=' max-sm:px-2 max-sm:text-center m-auto'>
                        <div className='flex items-center w-full py-5  '>
                            <div className="h-[1px] dark:bg-zinc-400 bg-[#424242] flex-grow"></div>
                        </div>
                        <div className='grid sm:grid-cols-7 gap-4'>
                            <div className=' col-span-5'>
                                <p className="text-lg max-sm:text-sm max-sm:leading-6 tracking-wide text-justify text-black dark:text-white font-comfortaa sm:my-4">
                                    {ServiceDetails.InteriorDesignConsultation.description}
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
                src={ServiceDetails.InteriorDesignConsultation.image}
                alt="industial service"
                className='absolute top-0 h-full z-0 object-cover w-full'
            />
            {
                isDarkMode && (
                    <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#000000a8]"></div>
                )
            }
        </section>
    )

}