import { blueBoxImg, greatBg, greatBgBorder } from "../../../assets";
import HeaderFormat from "../../../components/header";

const data = [
    {
        description: `Are starting a new business and need help with e-commerce setup and branding`
    },
    {
        description: `Are making the leap from employee to business owner and want to establish a strong digital presence`
    },
    {
        description: `Are struggling to attract, retain and monetize customers and are seeking to run successful email campaigns`
    },
    {
        description: `Have an existing business and want to optimize processes and improve their online visibility`
    },
    {
        description: `Struggle with managing social media and need expert assistance to grow their online audience`
    },
    {
        description: `Want to improve their website's performance and require SEO-optimized content to boost search rankings`
    },
]

export default function SirzIsGreat() {
    return (
        <div className=" relative sm:pt-10 pb-20">
            <div>
                <img src={greatBgBorder} alt="" className="mb-[-90px]" />
                <img src={greatBg} alt="" />
            </div>
            <section className="sm:w-[85%] bg-colorLight pb-10 sm:absolute sm:top-40 max-sm:mt-[-160px] right-0 left-0 m-auto">
                <HeaderFormat
                    title="SIRz is great for people who..."
                    classNames="text-black"
                />
                <section className=" grid sm:grid-cols-3 pt-7 gap-x-5 gap-y-8 max-sm:w-[90%] max-sm:m-auto">
                    {
                        data.map((item, index) => (
                            <div key={index} className=" bg-colorDefaultLight border dark:bg-colorDark flex px-8 text-center items-center justify-center flex-col h-[270px] rounded-3xl">
                                <img src={blueBoxImg} alt="" />
                                <div className="text-[20px] pt-4">{item.description}</div>
                            </div>
                        ))
                    }
                </section>
            </section>
        </div>
    )
}