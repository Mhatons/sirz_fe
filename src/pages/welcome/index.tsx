import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import './styles.css'
import { ROUTES } from "../../constants/routes/desc";
import { IMAGES } from "../../assets";
import { useAppSelector } from "../../app/hook";
import { allReduxSliceInfo } from "../../features/reduxSlice";

export default function WelcomePage() {
    const navigate = useNavigate();
    const { isDarkMode } = useAppSelector(allReduxSliceInfo)
    const [welcome, setWelcome] = useState<boolean>(false);
    const [redirecting, setRedirecting] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirecting(true);
            navigate(ROUTES.HOME.PATH);
        }, 5000);

        setTimeout(() => {
            setWelcome(true);
        }, 500);

        return () => clearTimeout(timer);
    }, [navigate]);

    if (redirecting) return null;

    return (
        <div className="overflow-x-hidden dark:bg-darkModeDeep dark:text-white flex items-center justify-center h-screen">
            <div className="text-center">
                <div className="xxxm:w-[150px] w-[100px] m-auto mb-5">
                    <img src={isDarkMode ? IMAGES.logo_dark : IMAGES.logo_light} className="w-full flipClass" alt="" />
                </div>
                <h1 className={` ${welcome && "tracking-normal "} uppercase welcome-text whitespace-nowrap tracking-[2em] duration-[4s] font-Canela-light xxxm:text-2xl sm:text-lg text-sm`}>
                    Welcome to Haven & Hive Interiors Ltd
                </h1>
            </div>
        </div>
    );
}
