import { ImArrowRight2 } from "react-icons/im";
import { AboutHeroBg, BlogCardFour, BlogCardOne, BlogCardThree, BlogCardTwo, brandImg, GreenVector, projectImg, ProjectVector, ProjectWebBg } from "../../assets";
import Button from "../../components/common/button";
import HeaderFormat from "../../components/header";

export default function Projects() {

    const data = [
        {
            image: projectImg.projOne,
            title: "Grow Your Brand",
            text: "Anyone with a brand! Seriously, if you’re running a business, leading a team, or trying to figure out.."
        },
        {
            image: projectImg.projTwo,
            title: "Secrets to selling as a business owner",
            text: "Struggling to Boost Your Online Sales? Let’s Fix That!"
        },
        {
            image: projectImg.projThree,
            title: "Grow your corporate brand",
            text: "Building a corporate brand is tough we know because we’ve been there too"
        },
        {
            image: projectImg.projFour,
            title: "Secrets to selling as a business owner",
            text: "Struggling to Boost Your Online Sales? Let’s Fix That!"
        },
        {
            image: projectImg.projFive,
            title: "Grow your Service Branding",
            text: "This isn’t another dry business book, it’s a straightforward guide packed with tips that work. "
        },
        {
            image: projectImg.projSix,
            title: "Popular Types Of Social Media Content To Grow Your Brand",
            text: "This eBook is your step-by-step guide to creating....."
        },
    ]

    const dataImg = [
        BlogCardOne,
        BlogCardTwo,
        BlogCardThree,
        BlogCardFour,
    ]


    return (
        <div className='pt-8'>
            <section className="relative">
                <div className=' sm:w-[75%] w-[90%] m-auto pb-10'>
                    <div className=" sm:w-[50%] w-[90%] m-auto relative">
                        <header className="sm:text-[50px] text-[30px] leading-tight text-center font-bold">Our Projects</header>
                        <div className=" text-center pt-6 pb-3 ">
                            <i>Discover how we’ve helped brands grow through digital marketing, branding, and design.</i>
                        </div>
                        <img src={GreenVector} alt="" className=" absolute sm:top-[-10px] top-[-45px] bottom-0 left-0 m-auto right-0" />
                    </div>
                    <div className='py-4 relative z-10'>
                        <img
                            src={AboutHeroBg}
                            alt="" className=' border rounded-3xl p-2 border-colorBlueDeep h-full w-full object-cover'
                        />
                    </div>
                </div>
                <img src={ProjectVector} alt="" className=" absolute sm:top-28 top-40 bottom-0 left-0 right-0" />
            </section>
            <section className=" dark:bg-colorGreenDeeper py-10">
                <div className='sm:w-[85%] w-[90%] m-auto'>
                    <div className=''>
                        <HeaderFormat title="E-Commerce Websites" classNames="text-black dark:text-white" />
                        <h4 className=" sm:font-bold max-sm:text-justify sm:py-6 py-4 sm:text-[27px] text-[17px] sm:leading-9">
                            We create high-converting, user-friendly online stores that drive sales and enhance the shopping experience.
                        </h4>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <img src={ProjectWebBg} alt="" />
                        </div>
                        <div className=" max-sm:text-justify">
                            <header className=" font-bold text-[20px] text-left">Domestica - Elevating Home Essentials Shopping</header>
                            <div>
                                <header className=" font-bold py-4">About the Brand:</header>
                                <p>
                                    Domestica is an e-commerce platform that offers a curated selection of premium home essentials.
                                    From stylish decor to everyday household items, Domestica makes online shopping seamless, delivering quality products with ease.
                                </p>
                            </div>
                            <div>
                                <header className=" font-bold py-4">Our Work:</header>
                                <p>
                                    We developed a visually appealing, user-friendly e-commerce website for Domestica, ensuring a smooth shopping experience with intuitive navigation,
                                    engaging product displays, and a seamless checkout process. Our focus was on creating a modern, functional design that enhances user engagement and drives conversions.
                                </p>
                            </div>
                            <Button text="Visit the website" onClick={() => { }} className="sm:w-[40%] w-[90%] m-auto mt-8" />
                        </div>
                    </div>
                </div>
            </section>

            <section className=" bg-colorLight dark:bg-colorDark pt-10 ">
                <div className='sm:w-[85%] w-[90%] m-auto'>
                    <div className=''>
                        <HeaderFormat title="E-book covers" classNames="text-black dark:text-white" />
                        <h4 className=" sm:font-bold max-sm:text-justify pb-8 pt-4 sm:text-[22px] text-[17px] sm:leading-9">
                            Bringing stories to life with visually compelling and marketable ebook cover designs.
                        </h4>
                    </div>
                    <div className=" grid sm:grid-cols-3 gap-8 pb-10">
                        {
                            data.map((item, index) => (
                                <div key={index} className=" bg-white dark:bg-colorDefaultDark p-2 rounded-2xl pb-2">
                                    <img src={item.image} alt="" className="w-full rounded-2xl object-cover h-[350px]" />
                                    <section className=" font-light text-[14px]">
                                        <div className="pt-4 pb-1">
                                            <header className=" font-bold">{item.title}</header>
                                        </div>
                                        <div className="text-[12px]">
                                            {item.text}
                                        </div>
                                        <button
                                            className="flex items-center gap-1 text-colorBlueDeep font-normal text-[17px] pt-2">
                                            Get now
                                            <ImArrowRight2 />
                                        </button>
                                    </section>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className=" sm:w-[85%] w-[90%] m-auto py-10">
                <div className=''>
                    <HeaderFormat title="Branding" classNames="text-black dark:text-white" />
                    <h4 className=" sm:font-bold max-sm:text-justify pb-8 pt-4 sm:text-[22px] text-[17px] sm:leading-9">
                        Bringing stories to life with visually compelling and marketable ebook cover designs.
                    </h4>
                </div>
                <div className=" flex items-center hideScrollBar overflow-x-scroll gap-5">
                    {
                        brandImg.map((img, index) => (
                            <img key={index} src={img} alt="" className="sm:min-w-[350px] min-w-[300px] rounded-2xl h-[350px]" />
                        ))
                    }
                </div>
            </section>

            <section className="bg-colorLight dark:bg-colorDark pt-6">
                <div className=" sm:w-[85%] w-[90%] m-auto py-10">
                    <div className=''>
                        <HeaderFormat title="Social Media Management" classNames="text-black dark:text-white" />
                        <h4 className=" sm:font-bold max-sm:text-justify pb-8 pt-4 sm:text-[22px] text-[17px] sm:leading-9">
                            Helping brands grow their online presence through engaging content, strategy, and community management.                    </h4>
                    </div>
                    <div className=" grid lg:grid-cols-4 grid-cols-2 gap-0">
                        {
                            dataImg.map((img, index) => (
                                <img key={index} src={img} alt="" className="" />
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className=" bg-colorGreenDeeper text-white ">
                <div className="sm:w-[85%] w-[90%] m-auto py-10">
                    <div className='sm:w-[60%] max-sm:text-center'>
                        <HeaderFormat title="Better together" />
                        <h4 className=" pt-4 sm:text-[16px] text-[17px]">
                            Want to Elevant Your Brand?
                        </h4>
                        <div className=" pb-8 text-[15px] ">
                            Helping brands grow their online presence through engaging content, strategy, and community management.
                        </div>
                    </div>
                    <button className={` bg-white text-black rounded-full sm:w-[23%] w-full max-sm:mt-5
                        'w-full flex align-center justify-center py-4 cursor-pointer text-[20px] px-8 font-medium floating-button  
                        `}
                        onClick={() => { }}>
                        Get in touch
                    </button>
                </div>
            </section>
        </div>
    )
}