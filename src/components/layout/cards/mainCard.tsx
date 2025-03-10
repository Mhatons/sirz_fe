import { ImArrowRight2 } from "react-icons/im";
import { MainCardBg } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes/desc";

export default function MainCard() {
    const navigate = useNavigate()
    return (
        <div className=" bg-colorLight dark:bg-colorDark p-2 rounded-2xl pb-5">
            <img src={MainCardBg} alt="" className="w-full object-cover rounded-2xl h-[250px]" />
            <section className=" font-light text-[14px]">
                <div className="pt-4 pb-6">
                    <header className=" font-bold">Digital Marketing Trends You Can’t Ignore in 2024</header>
                    <div>Wed, 8th Feb. 2025</div>
                </div>
                <div>
                    Stay ahead of the competition with the latest marketing strategies! From AI-driven campaigns to social media shifts, here’s what’s shaping the digital landscape this year
                </div>
                <button
                    onClick={() => navigate(ROUTES.BLOG.PATH)}
                    className="flex items-center gap-1 text-colorBlueDeep font-normal text-[17px] pt-5">
                    Read more
                    <ImArrowRight2 />
                </button>
            </section>
        </div>
    )
}