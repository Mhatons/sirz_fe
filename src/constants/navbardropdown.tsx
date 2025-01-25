import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { FACEBOOK_ICON, INSTAGRAM_ICON, LINKEDIN_ICON, serviceDropImg, TWITTER_ICON } from "../assets";
import { allReduxSliceInfo, setIsOpen, setShowServices } from "../features/reduxSlice";
import { ServiceDetails } from "./serviceMenu";
import { useNavigate } from "react-router-dom";

export default function NavbarDropdown() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const { showServices } = useAppSelector(allReduxSliceInfo);

    const toggleShowServices = () => {
        dispatch(setShowServices(!showServices));
    };

    return (
        <div>
            <header onClick={toggleShowServices} className="flex items-center gap-2">
                <div>Services</div>
                <div>
                    {
                        !showServices ? <IoIosArrowDown /> : <IoIosArrowUp />
                    }
                </div>
            </header>


            {/* service menu */}
            <section
                className={`flex absolute bg-[#f4f5f7f2] text-black dark:text-white dark:bg-[#1b1f23f7] transform ${showServices ? 'translate-y-00' : '-translate-y-[800px]'
                    } transition-transform duration-1000 ease-out w-full left-0 right-0 -z-30 top-0 pb-16 pt-24 shadow-lg flex-col items-center lg:text-[18px] max-lg:hidden justify-between font-comfortaa`}
            >
                <div className=" grid grid-cols-2 border-t pt-8">
                    <div className=" border-r relative mr-10 pr-10">
                        <div className="w-full relative ">
                            <img src={serviceDropImg} alt="" className="w-full object-cover max-h-[300px]" />
                            <div className=" absolute top-4 text-rose-800 right-3 w- text-[25px] ">
                                <p>A Haven you can Trust</p>
                            </div>
                        </div>
                        <div className=" absolute bottom-0 bg-[#124e578a] py-2 pr-8">
                            <div className="text-xs font-nexa-light flex flex-col items-start md:items-end">
                                {/* <p className="text-[#fff] text-start md:text-end mb-3">Social Media</p> */}
                                <div className="flex flex-row items-center justify-center gap-x-10">
                                    <img src={LINKEDIN_ICON} alt="LinkedIn" />
                                    {/* <img src={TWITTER_ICON} onClick={} alt="Twitter" /> */}
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <img src={TWITTER_ICON} alt="Twitter" />
                                    </a>
                                    <img src={INSTAGRAM_ICON} alt="Instagram" />
                                    <img src={FACEBOOK_ICON} alt="Facebook" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className=" grid grid-cols-2 text-sm gap-3">
                        {Object.values(ServiceDetails).map((item, index) => (
                            <li
                                key={index}
                                className="cursor-pointer whitespace-nowrap my-2 hover:text-rose-700"
                                onClick={() => { dispatch(setShowServices(false)); navigate(item.url) }}
                            >
                                {item?.title}
                            </li>
                        ))}

                    </ul>
                </div>
            </section>

            <section className={`${showServices ? 'translate-y-00' : '-translate-y-[800px] hidden'} lg:hidden pt-6 border-b pb-6 mb-4`}>
                <ul className=" grid-cols-2 text-sm gap-3 ps-6">
                    {Object.values(ServiceDetails).map((item, index) => (
                        <li
                            key={index}
                            className="cursor-pointer list-disc whitespace-nowrap my-4 tracking-wider hover:text-rose-700"
                            onClick={() => { dispatch(setShowServices(false)); navigate(item.url); dispatch(setIsOpen(false)) }}
                        >
                            {item?.title}
                        </li>
                    ))}

                </ul>
            </section>
        </div>
    )
} 