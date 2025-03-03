import Button from "../../../components/common/button";
import HeaderFormat from "../../../components/header";
import { domesticiaImg, iroseImg, socialSupportImg } from "../../../assets";
import ButtonCard from "../../../components/layout/cards/buttonCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes/desc";

export default function OurProjects() {
    const navigate = useNavigate();
    return (
        <div className="py-10 w-[90%] m-auto">
            <HeaderFormat title="Explore our projects" classNames="text-black dark:text-white" />
            <section className="sm:flex items-start justify-between gap-6">
                <h4 className=" font-bold py-6 text-[27px] sm:w-[80%] w-[100%] leading-9">
                    We take ideas and turn them into powerful digital solutions. Check out some of our latest projects and see how we help businesses thrive!
                </h4>
                <div className="sm:w-[20%] w-[80%]">
                    <Button text="View all projects" onClick={() => navigate(ROUTES.PROJECTS.PATH)} />
                </div>
            </section>

            <section className="grid sm:grid-cols-3 gap-8 pt-10 pb-12 ">
                <img src={domesticiaImg} alt="" className=" sm:col-span-2" />
                <ButtonCard
                    title="Domesticia"
                    text="Domestica is an e-commerce platform that offers a curated selection of premium home essentials. From stylish decor to everyday household items, Domestica makes online shopping seamless, delivering quality products with ease."
                    buttonText="view projects"
                    onClick={() => navigate(ROUTES.PROJECTS.PATH)}
                />
            </section>

            <section className="grid sm:grid-cols-3 pb-12 gap-8 ">
            <img src={iroseImg} alt="" className=" sm:hidden sm:col-span-2" />
                <ButtonCard
                    title="Irose Fashion"
                    text="Domestica is an e-commerce platform that offers a curated selection of premium home essentials. From stylish decor to everyday household items, Domestica makes online shopping seamless, delivering quality products with ease."
                    buttonText="view projects"
                    onClick={() => navigate(ROUTES.PROJECTS.PATH)}
                />
                <img src={iroseImg} alt="" className="  max-sm:hidden sm:col-span-2" />
            </section>

            <section className="grid sm:grid-cols-3 gap-8 pb-8 ">
                <img src={socialSupportImg} alt="" className=" sm:col-span-2" />
                <ButtonCard
                    title="Social media support"
                    text="Social Media Management Helping brands grow their online presence through engaging content, strategy, and community management."
                    buttonText="view projects"
                    onClick={() => navigate(ROUTES.PROJECTS.PATH)}
                />
            </section>
        </div>
    )
}