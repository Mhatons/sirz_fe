import { BsPersonFill } from "react-icons/bs";
import Button from "../common/button";
import { Select } from "../common/input";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.jpg'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const menuItem = [
        {
            title: "About us",
            action: "about"
        },
        {
            title: "FAQs",
            action: "/faq"
        },
        {
            title: "Calculate Profit",
            action: "calculate-profit"
        },
        {
            title: "Contact Us",
            action: "https://t.me/portalearn_trades"
        },
        {
            title: "Recent Investments",
            action: "recent-investments"
        },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navItems = [
        ...menuItem,
        {
            title: <Select />,
            action: "#"
        },
        {
            title: <Button name="start now" />,
            action: "#"
        },
        {
            title: <BsPersonFill className="text-[30px]" />,
            action: "#"
        },
    ];

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="fixed w-full z-40">
            <div className={`bg-[#006C83] ${isOpen ? "" : "shadow-lg"} text-white py-6 lg:h-[160px] px-10 lg:items-end flex justify-between`}>
                <div onClick={() => navigate("/")} className="lg:pb-5 lg:h-[100px] w-[20%]">
                    <img src={logo} alt="" className=" h-full cursor-pointer" />
                </div>
                <ul className="flex max-lg:hidden items-center text-[18px] gap-4 justify-between w-[80%] font-comfortaa">
                    {
                        navItems.map((item, index) => (
                            <li
                                className=" cursor-pointer"
                                onClick={() => {
                                    const { action } = item;

                                    if (action.startsWith('/')) {
                                        // Internal command, navigate within the app
                                        navigate(action);
                                    } else if (action.startsWith('http://') || action.startsWith('https://')) {
                                        // External link, open in a new tab
                                        window.open(action, '_blank');
                                    } else {
                                        // Handle scroll or other actions
                                        handleScroll(action);
                                    }
                                }}
                                key={index}>
                                {item?.title}
                            </li>
                        ))
                    }
                </ul>
                <div className=" lg:hidden">
                    <FaBars className="text-[30px] cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>
                {
                    // isOpen && (
                    <ul
                        className={`flex absolute bg-[#006C83] transform ${isOpen ? 'translate-y-0' : '-translate-y-[600px]'
                            } transition-transform duration-1000 ease-out w-full left-0 right-0 -z-30 top-16 pb-8 pt-10 shadow-lg lg:hidden flex-col items-center lg:text-[18px] justify-between font-comfortaa`}>
                        {
                            navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className=" cursor-pointer my-2"
                                    onClick={() => {
                                        const { action } = item;

                                        if (action.startsWith('/')) {
                                            // Internal command, navigate within the app
                                            navigate(action);
                                        } else if (action.startsWith('http://') || action.startsWith('https://')) {
                                            // External link, open in a new tab
                                            window.open(action, '_blank');
                                        } else {
                                            // Handle scroll or other actions
                                            handleScroll(action);
                                        }
                                    }}
                                >
                                    {item?.title}
                                </li>
                            ))
                        }
                    </ul>
                    // )
                }

            </div>
        </div>
    )
}

