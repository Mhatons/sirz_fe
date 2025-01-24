import { BsPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo_dark, logo_light } from "../../assets/images";

import DarkModeToggle from "../../features/darkMode";
import { useAppSelector } from "../../app/hook";
import { allReduxSliceInfo } from "../../features/reduxSlice";
import { IoMdClose } from "react-icons/io";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode } = useAppSelector(allReduxSliceInfo)
    const navigate = useNavigate();
    const menuItem = [
        { title: 'Home', action: "home" },
        { title: "About us", action: "about" },
        { title: "FAQs", action: "/faq" },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        ...menuItem,
        { title: <BsPersonFill className="text-[30px]" />, action: "#" },
        // { title: <DarkModeToggle />, action: "#" },
    ];

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Track scroll event to adjust navbar

    return (
        <div className={` absolute top-0  w-full z-40`}>
            <div
                className={` text-white px-10 pt-4 flex justify-between transition-all duration-300 h-[60px] items-center `}
            >
                <div
                    onClick={() => navigate("/")}
                    className={`cursor-pointer sm:w-72 w-60 ms-[-7em]  transition-all duration-300 `}
                >
                    <img
                        src={isDarkMode ? logo_dark : logo_light}
                        alt=""
                        className={` w-full  rounded-full`}
                    />
                </div>
                <ul
                    className={`flex max-lg:hidden items-center dark:text-white text-[#ffffff] font-semibold text-[15px] gap-4 justify-between  font-comfortaa transition-all`}
                >
                    {navItems.map((item, index) => (
                        <li
                            className="whitespace-nowrap hover:border-rose-700 border-transparent border-b-2 cursor-pointer"
                            onClick={() => { }}
                            key={index}
                        >
                            {item?.title}
                        </li>
                    ))}
                    {/* <li>
                        <Button text="Contact" onClick={() => { }} />
                    </li> */}
                    <li>
                        <DarkModeToggle />
                    </li>
                </ul>
                <div className="lg:hidden flex items-center text-black dark:text-white">
                    {
                        !isOpen && <FaBars
                            className="text-[30px] cursor-pointer"
                            onClick={toggleMenu}
                        />
                    }
                    {
                        isOpen && <IoMdClose
                            className="text-[30px] cursor-pointer"
                            onClick={toggleMenu}
                        />
                    }

                </div>
                <ul
                    className={`flex absolute bg-[#f4f5f7f2] text-black rounded-b-3xl dark:text-white dark:bg-[#1b1f23f7] transform ${isOpen ? 'translate-y-00' : '-translate-y-[600px]'
                        } transition-transform duration-1000 ease-out w-full left-0 right-0 -z-30 top-0 pb-16 pt-28 shadow-lg lg:hidden flex-col items-center lg:text-[18px] justify-between font-comfortaa`}
                >
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="cursor-pointer whitespace-nowrap my-2"
                            onClick={() => {
                                const { action } = item;

                                if (action.startsWith('/')) {
                                    navigate(action);
                                } else if (
                                    action.startsWith('http://') ||
                                    action.startsWith('https://')
                                ) {
                                    window.open(action, '_blank');
                                } else {
                                    handleScroll(action);
                                }
                            }}
                        >
                            {item?.title}
                        </li>
                    ))}
                    <li>
                        <DarkModeToggle />
                    </li>
                </ul>
            </div>
        </div>
    );
}

