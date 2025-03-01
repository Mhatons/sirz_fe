import { HeroOfferBg } from "../../assets";
import Button from "../../components/common/button";
import HeaderFormat from "../../components/header";
import MainCard from "../../components/layout/cards/mainCard";

export default function OurBlogPage() {

    return (
        <div>
            <section
                style={{
                    backgroundImage: `url(${HeroOfferBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="pb-20 pt-28 relative"
            >
                <div className="bg-white relative z-10 dark:bg-colorDark sm:w-[55%] w-[90%] max-sm:m-auto sm:ms-28 rounded-md sm:py-10 py-10">
                    <div className="sm:w-[80%] m-auto max-sm:px-5">
                        <p className="flex items-center gap-3 text-sm">Febrary 11th, 2024 <div className="h-2 w-2 rounded-full bg-colorGreen"></div> New blog post</p>
                        <h4 className="pt-8 pb-5 font-bold sm:text-[33px] text-[23px] leading-7">5 Must-Have Elements for a High Converting E-commerce Store</h4>
                        <p className="flex items-center gap-3 text-sm">By Chinonye Umeh <div className="h-2 w-2 rounded-full bg-colorGreen"></div> 5 mins read</p>
                        <div className="sm:w-[50%] pt-10">
                            <Button text='Read now' onClick={() => { }} />
                        </div>
                    </div>
                </div>
                <div className=" bg-colorGreenDeeper  absolute top-0 right-[60%] bottom-0 left-0 "></div>
            </section>
            <section className='sm:w-[85%] w-[90%] m-auto py-20'>
                <div className=''>
                    <HeaderFormat title="Featured blog post from us" classNames="text-black" />
                    <h4 className=" sm:font-bold max-sm:text-justify py-6 sm:text-[27px] text-[17px] sm:leading-9">
                        Whether you're launching a business or scalling one, our blog keeps you informed and inspired. Read the latest now!
                    </h4>
                </div>
                <div className=" grid lg:grid-cols-3 sm:grid-cols-2 pt-5 gap-8">
                    <MainCard />     
                    <MainCard />     
                    <MainCard />  

                    <MainCard />     
                    <MainCard />     
                    <MainCard />  
                       
                    <MainCard />     
                    <MainCard />     
                    <MainCard />     
                </div>
            </section>
        </div>
    );
}
