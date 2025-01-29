import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import DarkModeToggle from "../../features/darkMode";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { allReduxSliceInfo, setIsOpen, setShowServices } from "../../features/reduxSlice";
import { ROUTES } from "../../constants/routes/desc";
import NavbarDropdown from "../../constants/navbardropdown";
import { IoMdClose } from "react-icons/io";
import { IMAGES } from "../../assets";

export default function NavBar() {
    // const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch()
    const { isDarkMode, isOpen } = useAppSelector(allReduxSliceInfo)
    const navigate = useNavigate();
    const menuItem = [
        {
            title: 'Home',
            action: ROUTES.HOME.PATH,
        },
        {
            title: "About us",
            action: ROUTES.ABOUT.PATH,
        },
        {
            title: "Contact",
            action: ROUTES.CONTACT.PATH,
        },
        {
            title: <NavbarDropdown />,
            icon: "",
            action: 'services'
        },
        {
            title: "Projects",
            action: ROUTES.PROJECTS.PATH,
        },
        {
            title: "Careers",
            action: ROUTES.CAREER.PATH,
        },
        {
            title: "Refer & earn",
            action: ROUTES.REFERRAL.PATH,
        },
        {
            title: "FAQs",
            action: ROUTES.SERVICES.PATH,
        },
    ];

    const toggleMenu = () => {
        dispatch(setIsOpen(!isOpen));
        dispatch(setShowServices(false));
    };

    return (
        <div className={` absolute top-0  w-full z-40`}>
            <div
                className={` text-white sm:w-[95%] w-[90%] m-auto pt-4 flex justify-between transition-all duration-300 h-[60px] items-center `}
            >
                <div
                    onClick={() => navigate("/")}
                    className={`cursor-pointer sm:w-16 w-12  transition-all duration-300 `}
                >
                    <img
                        src={isDarkMode ? IMAGES.logo_dark : IMAGES.logo_light}
                        alt=""
                        className={` w-full rounded-full`}
                    />
                </div>
                <ul
                    className={`flex max-lg:hidden items-center dark:text-white text-background_dark font-normal text-[15px] gap-5 justify-between  font-comfortaa transition-all`}
                >
                    {menuItem.map((item, index) => (
                        <li
                            className="whitespace-nowrap flex items-center gap-2 hover:border-rose-700 border-transparent border-b-2 cursor-pointer"
                            onClick={() => {
                                if (item.action === 'services') {
                                    // toggleShowServices() 
                                } else {
                                    {navigate(item?.action); dispatch(setShowServices(false))}; // Navigate to route
                                }
                            }}
                            key={index}
                        >
                            {item?.title}
                            {item.icon}
                        </li>
                    ))}
                    <li>
                        <DarkModeToggle />
                    </li>
                </ul>

                {/* display on smaller screen sizes */}
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
                <div
                    className={`flex absolute bg-[#f4f5f7] text-black dark:text-white dark:bg-[#1b1f23] transform ${isOpen ? 'translate-y-00' : '-translate-y-[600px]'
                        } transition-transform duration-1000 ease-out w-full left-0 right-0 -z-30 top-0 pb-16 pt-28 shadow-lg lg:hidden flex-col items-left lg:text-[18px] justify-between font-comfortaa`}
                >
                    <ul className=" w-[80%] relative m-auto">
                        {menuItem.map((item, index) => (
                            <li
                                key={index}
                                className="cursor-pointer flex items-center gap-2 whitespace-nowrap my-6"
                                onClick={() => {
                                    if (item.action === 'services') {
                                        // toggleShowServices() 
                                    } else {
                                        dispatch(setIsOpen(false)); navigate(item.action)
                                    }
                                }}
                            >
                                {item?.title}
                                {item.icon}
                            </li>
                        ))}
                        <li className="flex items-center gap-4">
                            toggle mode
                            <DarkModeToggle />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

