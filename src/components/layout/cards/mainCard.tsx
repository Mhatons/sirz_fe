import { ImArrowRight2 } from "react-icons/im";
import { sampleImgNew } from "../../../assets";

export default function MainCard() {
    return (
        <div className=" bg-colorLight p-2 rounded-2xl pb-5">
            <div>
                <img src={sampleImgNew} alt="" className="w-full rounded-2xl h-[250px]" />
            </div>
            <section className=" font-light text-[14px]">
                <div className="pt-4 pb-6">
                    <header className=" font-bold">Digital Marketing Trends You Can’t Ignore in 2024</header>
                    <div>Wed, 8th Feb. 2025</div>
                </div>
                <div>
                    Stay ahead of the competition with the latest marketing strategies! From AI-driven campaigns to social media shifts, here’s what’s shaping the digital landscape this year
                </div>
                <button
                    className="flex items-center gap-1 text-colorBlueDeep font-normal text-[17px] pt-5">
                    Read more
                    <ImArrowRight2 />
                </button>
            </section>
        </div>
    )
}