// import { BsPersonFill } from "react-icons/bs";
// import Button from "../common/button";
// import { Select } from "../common/input";
// import { FaBars } from "react-icons/fa6";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from '../../assets/logo.jpg'

// export default function NavBar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const navigate = useNavigate()
//     const menuItem = [
//         {
//             title: "About us",
//             action: "about"
//         },
//         {
//             title: "FAQs",
//             action: "/faq"
//         },
//         {
//             title: "Calculate Profit",
//             action: "calculate-profit"
//         },
//         {
//             title: "Contact Us",
//             action: "https://t.me/portalearn_trades"
//         },
//         {
//             title: "Recent Investments",
//             action: "recent-investments"
//         },
//     ];

//     const toggleMenu = () => {
//         setIsOpen(!isOpen)
//     }

//     const navItems = [
//         ...menuItem,
//         {
//             title: <Select />,
//             action: "#"
//         },
//         {
//             title: <Button name="start now" />,
//             action: "#"
//         },
//         {
//             title: <BsPersonFill className="text-[30px]" />,
//             action: "#"
//         },
//     ];

//     const handleScroll = (id: string) => {
//         const section = document.getElementById(id);
//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth' });
//         }
//     };
//     return (
//         <div className="fixed w-full z-40">
//             <div className={`bg-[#006C83] ${isOpen ? "" : "shadow-lg"} text-white py-6 lg:h-[160px] px-10 lg:items-end flex justify-between`}>
//                 <div onClick={() => navigate("/")} className="lg:pb-5 lg:h-[100px] w-[20%]">
//                     <img src={logo} alt="" className=" h-full cursor-pointer" />
//                 </div>
//                 <ul className="flex max-lg:hidden items-center text-[15px] gap-4 justify-between w-[80%] font-comfortaa">
//                     {
//                         navItems.map((item, index) => (
//                             <li
//                                 className=" whitespace-nowrap cursor-pointer"
//                                 onClick={() => {
//                                     const { action } = item;

//                                     if (action.startsWith('/')) {
//                                         // Internal command, navigate within the app
//                                         navigate(action);
//                                     } else if (action.startsWith('http://') || action.startsWith('https://')) {
//                                         // External link, open in a new tab
//                                         window.open(action, '_blank');
//                                     } else {
//                                         // Handle scroll or other actions
//                                         handleScroll(action);
//                                     }
//                                 }}
//                                 key={index}>
//                                 {item?.title}
//                             </li>
//                         ))
//                     }
//                 </ul>
//                 <div className=" lg:hidden">
//                     <FaBars className="text-[30px] cursor-pointer"
//                         onClick={toggleMenu}
//                     />
//                 </div>
//                 {
//                     // isOpen && (
//                     <ul
//                         className={`flex absolute bg-[#006C83] transform ${isOpen ? 'translate-y-0' : '-translate-y-[600px]'
//                             } transition-transform duration-1000 ease-out w-full left-0 right-0 -z-30 top-16 pb-8 pt-10 shadow-lg lg:hidden flex-col items-center lg:text-[18px] justify-between font-comfortaa`}>
//                         {
//                             navItems.map((item, index) => (
//                                 <li
//                                     key={index}
//                                     className=" cursor-pointer whitespace-nowrap my-2"
//                                     onClick={() => {
//                                         const { action } = item;

//                                         if (action.startsWith('/')) {
//                                             // Internal command, navigate within the app
//                                             navigate(action);
//                                         } else if (action.startsWith('http://') || action.startsWith('https://')) {
//                                             // External link, open in a new tab
//                                             window.open(action, '_blank');
//                                         } else {
//                                             // Handle scroll or other actions
//                                             handleScroll(action);
//                                         }
//                                     }}
//                                 >
//                                     {item?.title}
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                     // )
//                 }

//             </div>
//         </div>
//     )
// }










import { BsPersonFill } from "react-icons/bs";
import Button from "../common/button";
import { Select } from "../common/input";
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.jpg';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const menuItem = [
        { title: "About us", action: "about" },
        { title: "FAQs", action: "/faq" },
        { title: "Calculate Profit", action: "calculate-profit" },
        { title: "Contact Us", action: "https://t.me/portalearn_trades" },
        { title: "Recent Investments", action: "recent-investments" },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        ...menuItem,
        { title: <Select />, action: "#" },
        { title: <Button name="start now" />, action: "#" },
        { title: <BsPersonFill className="text-[30px]" />, action: "#" },
    ];

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Track scroll event to adjust navbar
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={`fixed ${isScrolled ? "bg-[#0c33f486]" : ""}  w-full z-40`}>
            <div
                className={` text-white px-10 flex justify-between transition-all duration-300 ${isScrolled ? 'h-[60px] items-center shadow-lg' : 'py-6 lg:h-[160px] items-baseline h-[80px]'
                    }`}
            >
                <div
                    onClick={() => navigate("/")}
                    className={`cursor-pointer transition-all duration-300 ${isScrolled ? 'h-[40px]' : 'lg:h-[100px] h-[50px]'
                        }`}
                >
                    <img
                        src={logo}
                        alt=""
                        className={` mx-auto transition-all duration-300 ${isScrolled ? 'h-[40px]' : 'lg:h-[100px] h-[50px]'
                            }`}
                    />
                </div>
                <ul
                    className={`flex max-lg:hidden items-center text-[15px] gap-4 justify-between w-[80%] font-comfortaa transition-all ${isScrolled ? 'h-[40px] items-center' : ''
                        }`}
                >
                    {navItems.map((item, index) => (
                        <li
                            className="whitespace-nowrap cursor-pointer"
                            onClick={() => {
                                const { action } = item;

                                if (action.startsWith('/')) {
                                    // Internal command, navigate within the app
                                    navigate(action);
                                } else if (
                                    action.startsWith('http://') ||
                                    action.startsWith('https://')
                                ) {
                                    // External link, open in a new tab
                                    window.open(action, '_blank');
                                } else {
                                    // Handle scroll or other actions
                                    handleScroll(action);
                                }
                            }}
                            key={index}
                        >
                            {item?.title}
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden">
                    <FaBars
                        className="text-[30px] cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>
                <ul
                    className={`flex absolute bg-[#006C83] transform ${isOpen ? 'translate-y-0' : '-translate-y-[600px]'
                        } transition-transform duration-1000 ease-out w-full left-0 right-0 -z-30 top-16 pb-8 pt-10 shadow-lg lg:hidden flex-col items-center lg:text-[18px] justify-between font-comfortaa`}
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
                </ul>
            </div>
        </div>
    );
}

