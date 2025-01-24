import { useAppSelector } from "../../app/hook";
import { overlayImage } from "../../assets/images";
import { allReduxSliceInfo } from "../../features/reduxSlice";
import ContactForm from "./components/contactForm";

export default function Contact() {
    const { isDarkMode } = useAppSelector(allReduxSliceInfo)
    return (
        <div
            style={{ backgroundImage: isDarkMode ? `url(${overlayImage})` : "", backgroundSize: 'cover' }}
            className="sm:pt-32 bg-[#10333d] backgroundGradient text-background_dark dark:text-background_light border-b pt-28 sm:py-10">
            <div className=" md:grid grid-cols-2 gap-8">
                <div className="w-[90%] m-auto">
                    <header className=" text-[30px] text-black dark:text-white font-medium">Let Us Make That Sweet Haven You've Imagined a Reality</header>
                    <div className=" text-xl font-light py-5 sm:leading-9 leading-8 text-justify">
                        At Haven and Hive Interiors, we’re dedicated to transforming your space into a reflection of your vision. Our expert team works closely with you to understand your unique needs and goals, crafting tailored interior solutions that enhance functionality and style. Let us help you create an environment that inspires success and growth. Reach out today, and let’s begin the journey toward transforming your space.
                    </div>
                </div>
                <div className=" xxl:w-[90%] m-auto bg-white rounded-lg max-sm:mt-6 dark:bg-background_dark">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}