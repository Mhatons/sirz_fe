import { elipseImg, ExperticeImgOne, ExperticeImgThree, ExperticeImgTwo, rectangleBlue } from "../../../assets";
import HeaderFormat from "../../../components/header";
import ImageCard from "../../../components/layout/cards/imageCard";

export default function OurExpertise() {

    const data = [
        {
            title: "E-commerce",
            description: "Launch & Scale Your Online Store with Ease",
            image: ExperticeImgOne
        },
        {
            title: "Branding",
            description: "Build a Brand that Stands Out & Sells",
            image: ExperticeImgTwo
        },
        {
            title: "Digital Marketing",
            description: " Get Noticed. Get Customers. Get Results",
            image: ExperticeImgThree
        },
    ];

    return (
        < section
            style={{
                backgroundImage: `url(${rectangleBlue})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className=" max-sm:pb-8 relative sm:h-[700px]" >
            <div className="sm:pt-48 pt-36">
                {/* <img src={rectangleBlue} alt="" className="w-full h-full object-cover object-center " /> */}
                <div className=" absolute top-10 m-auto right-0 left-0 flex justify-center">
                    <img src={elipseImg} alt="" className="sm:w-[120px] w-[50px]" />
                </div>

                <div className=" ps-24 pb-10 text-left">
                    <HeaderFormat title="Our Expertise" classNames="text-white" />
                </div>
                <div className="flex items-center justify-center m-auto">
                    <div className="grid lg:grid-cols-3 sm:w-[85%] w-[90%] xxl:grid-cols-2 gap-8">
                        {
                            data.map((item, index) => (
                                <div key={index}>
                                    <ImageCard
                                        image={item.image}
                                        description={item.description}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}