import { BsPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.jpg'
import Modal from "../../../components/layout/modal";

export default function AdminNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navItems = [
        // {
        //     title: <Button name="Sign in" />,
        //     action: "#"
        // },
        {
            title: <BsPersonFill className="text-[30px]" />,
            action: "#"
        },
    ];

    const handleLogout = async () => {
        localStorage.removeItem('password');
        setIsModalOpen(false)
        location.reload();
    };

    const handleIconClick = () => {
        setIsModalOpen(true)
    }
    return (
        <div className="fixed w-full max-w-[100%] z-40">
            <div className={`bg-[#006C83] ${isOpen ? "" : "shadow-lg"} text-white lg:h-[80px] px-10 items-center flex justify-between`}>
                <div onClick={() => navigate("/")} className=" w-[70px] ">
                    <img src={logo} alt="" className=" h-full cursor-pointer w-full" />
                </div>
                <ul className="flex max-lg:hidden items-center text-[16px] gap-4 justify-end w-[80%] font-comfortaa">
                    {
                        navItems.map((item, index) => (
                            <li
                                className=" cursor-pointer"
                                onClick={handleIconClick}
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
                                    onClick={handleIconClick}
                                >
                                    {item?.title}
                                </li>
                            ))
                        }
                    </ul>
                    // )
                }

            </div>

            <Modal
                title="Delete all deposits"
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                onClick={handleLogout}
                text="You're about to logout"
            />
        </div>
    )
}

