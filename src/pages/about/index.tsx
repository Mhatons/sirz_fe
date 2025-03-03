import { AboutHeroBg, AboutOfferBg, AboutStoryBg, elipseImg, rectangleDarkBlue, startHalfImg } from '../../assets';
import HeaderFormat from '../../components/header';
import Button from '../../components/common/button';

const data = [
    {
        title: "01 What we're creating",
        text: "SIRz is an innovative E-business management solution designed to empower small, medium and big businesses. We provide the expertise, support, and strategies needed to streamline your online operations, save time, and boost profitability"
    },
    {
        title: "02 We give the best results",
        text: "SIRz combines technology, expertise, and a seamless, fully-managed process to help your business thrive online. We are dedicated to providing high-quality services at a price that works for you."
    },
    {
        title: "03 E-business management",
        text: "Our unique approach, streamlined processes, and team structure are the backbone of our effective strategy and one of the key reasons we’re able to achieve results for our customers that outperform industry standards."
    },
]

export default function About() {
    return (
        <div className='pt-8'>
            <section className=' sm:w-[75%] w-[90%] m-auto pb-10'>
                <header className="sm:text-[50px] text-[30px] leading-tight text-center font-bold">Affordable E-Business <i className=" text-colorBlueDeep">Solutions</i> For Busy Owners</header>
                <div className='py-4'>
                    <img
                        src={AboutHeroBg}
                        alt="" className=' border rounded-3xl p-2 border-colorBlueDeep h-full w-full object-cover' />
                </div>
            </section>
            <section className=' bg-colorGreenDeeper py-10 text-white font-normal italic'>
                <p className='sm:w-[70%] sm:text-[30px] w-[90%] text-[15px] m-auto text-center'>
                    We understand the effort it takes to keep up with the demands of digital marketing, e-commerce, and online presence while <br className='' /> juggling countless responsibilities. <br />
                    That's why we offer a better way—a unique approach, data-driven strategies, and an experienced team—all at affordable prices based on your specific needs.
                </p>
            </section>
            <section className='py-10'>
                <div className='sm:w-[85%] w-[90%] m-auto'>
                    <HeaderFormat title="About us.." classNames="text-black" />
                    <h4 className=" sm:font-bold max-sm:text-justify py-6 sm:text-[27px] text-[17px] sm:leading-9">
                        Sirz isn’t just another agency. We’re a partner in your journey. We dig deep into your why—why you started, why your product matters—and build strategies that connect with your audience.
                    </h4>
                </div>
                <div className=' md:grid bg-colorLight dark:bg-colorDark md:grid-cols-5 sm:gap-12 m-auto max-sm:p-5'>
                    <div className=' sm:col-span-3 relative sm:px-16 sm:py-10'>
                        <header className='sm:text-[45px] text-[30px] italic font-bold'>The Story Behind Sirz</header>
                        <div className='pt-4 text-[18px] max-md:text-justify'>
                            The Story Behind Sirz
                            In 2021, the founder of Sirz launched a small online fashion store with a simple dream: to build something meaningful that could generate passive income while managing a full-time 9-5 job.
                            Like many, the goal was financial freedom. But the focus was off. Hours went into perfecting the website, arranging photoshoots, and stocking inventory—while the most important aspect was overlooked:
                            understanding the customer. It didn’t take long for the reality to set in. The business never gained traction, despite investments running into Thousands of Dollars. The turning point came with a crucial realization:
                            the business didn’t fail because of bad products, but because of a flawed approach—building without knowing who it was for. The founder understood that it’s easier to sell what the market already wants than to create
                            something and hope it sells. This hard-earned lesson led to a deeper question: why do so many small businesses with great ideas fall short? Motivated by this, the founder immersed himself in learning the ins and outs of e-commerce,
                            focusing on one key principle: success isn’t just about a good product or a well-designed website—it’s about truly understanding customers and executing with a clear, strategic plan.
                        </div>
                        <div className='sm:w-[40%] w-[90%] max-sm:m-auto pt-6 max-sm:pb-20'>
                            <Button text="Schedule demo" onClick={() => { }} />
                        </div>
                        <div>
                            <img src={startHalfImg} alt="" className=' absolute left-0 bottom-0 max-sm:w-[60px]' />
                        </div>
                    </div>
                    <div className=' col-span-2 w-full'>
                        <img src={AboutStoryBg} alt="" className=' object-cover w-full h-full' />
                    </div>
                </div>
            </section>
            < section
                // style={{
                //     backgroundImage: `url(${rectangleDarkBlue})`,
                //     backgroundSize: "cover",
                //     backgroundPosition: "center",
                // }}
                className=" max-sm:pb-8 relative " >
                <img src={rectangleDarkBlue} alt="" className=" w-full sm:h-[200px] md:h-[150px] h-[100px] object-top object-cover" />
                <div className="  text-white  ">

                    <div className=" absolute top-3 m-auto right-0 left-0 flex justify-center">
                        <img src={elipseImg} alt="" className="sm:w-[120px] w-[50px]" />
                    </div>

                    <div className=' bg-colorGreenDeeper pb-10 right-0 left-0 flex items-center justify-center flex-col text-center m-auto'>
                        <div className="flex items-center justify-center flex-col text-center m-auto">
                            <header className='sm:text-[45px] text-[30px] italic font-bold'>Let's grow your business together</header>
                            <div className='text-[20px] sm:w-[50%] w-[90%] m-auto pt-4'>Let us manage your online business, processes, marketting, and strategy for an affordable monthly fee</div>
                        </div>
                        <div className=' lg:w-[20%] sm:w-[40%] w-[90%] m-auto pt-10'>
                            <button className={` tracking-widest bg-white text-black rounded-full w-full max-sm:mt-5
                            'w-full flex align-center justify-center py-4 cursor-pointer text-sm px-8 font-medium floating-button  
                            `}
                                onClick={() => { }}>
                                Get started now!
                            </button>
                        </div>
                    </div>
                </div>
            </section >
            <section className='py-10'>
                <div className='sm:w-[85%] w-[90%] m-auto'>
                    <HeaderFormat title="About us.." classNames="text-black dark:text-white" />
                    <h4 className=" sm:font-bold py-6 sm:text-[27px] text-[17px] max-sm:text-justify sm:leading-9">
                        Sirz isn’t just another agency. We’re a partner in your journey. We dig deep into your why—why you started, why your product matters—and build strategies that connect with your audience.
                    </h4>
                </div>
                <div className=' md:grid grid-cols-5 gap-10 m-auto sm:w-[85%]'>
                    <div className=' col-span-2 w-full'>
                        <img src={AboutOfferBg} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className=' col-span-3 relative px-4 py-10'>
                        {
                            data.map((item, index) => (
                                <div key={index} className=' border-b pt-3 pb-7'>
                                    <header className='sm:text-[35px] text-[20px] italic font-bold text-colorGreen'>{item.title}</header>
                                    <div className='pt-4 text-[17px] sm:ps-12'>
                                        {item.text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}