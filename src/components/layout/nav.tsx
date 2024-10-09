import { BsPersonFill } from "react-icons/bs";
import Button from "../common/button";
import { Select } from "../common/input";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            action: "#"
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
            title: <Button name="start now" onClick={() => { }} />,
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
                    logo
                </div>
                <ul className="flex max-lg:hidden items-center text-[18px] gap-4 justify-between w-[80%] font-comfortaa">
                    {
                        navItems.map((item, index) => (
                            <li
                                className=" cursor-pointer"
                                // onClick={() => navigate(item.action)}
                                onClick={() => item.action.startsWith('/') ? navigate(item.action) : handleScroll(item.action)}
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
                            } transition-transform duration-1000 ease-out w-full left-0 right-0 -z-30 top-16 pb-8 pt-5 shadow-lg lg:hidden flex-col items-center lg:text-[18px] justify-between font-comfortaa`}>
                        {
                            navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className=" cursor-pointer my-2"
                                    // onClick={() => navigate(item.action)}
                                    onClick={() => item.action.startsWith('/') ? navigate(item.action) : handleScroll(item.action)}
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

