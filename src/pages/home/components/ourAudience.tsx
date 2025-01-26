import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { IMAGES } from "../../../assets";

export default function OurAudience() {



    const audience = [
        {
            title: "Residential Clients",
            description: "Homeowners seeking to enhance their living spaces with professional interior design services.",
        },
        {
            title: "Commercial Entities",
            description: "Businesses, including offices, hotels, and retail stores, aiming to create functional and appealing environments for their operations.",
        },
        {
            title: "Real Estate Developers",
            description: " Collaborating with developers to provide interior solutions for new constructions and renovations.",
        },
        {
            title: "Institutions",
            description: " Educational and healthcare facilities requiring specialized interior design services to improve their environments.",
        },
    ];

    return (
        < section
            style={{ backgroundImage: `url(${IMAGES.overlayImage})`, backgroundSize: 'cover' }}
            className=" max-sm:pb-8 text-background_light lg:pt-[18em] xxl:pt-[38em] sm:pt-[33em] md:pt-[30em] pt-[4em] bg-[#10333d] pb-14" >
            <div className=" sm:w-[80%] w-[95%] m-auto">
                <header className=" text-center text-[35px] font-semibold">Who we server ?</header>
                <ul className=" sm:grid grid-cols-2 pt-10 gap-6">
                    {
                        audience.map((data, index) => (
                            <li key={index} className=" flex items-start max-sm:pb-7 max-sm:flex-col max-sm:items-center max-sm:text-center ">
                                <HiOutlineClipboardDocumentCheck className="text-[30px] sm:w-[10%] text-secondary" />
                                <div className="w-[89%]">
                                    <h4 className=" font-semibold max-sm:pb-3 max-sm:pt-5 text-2xl ">{data.title}</h4>
                                    <div className=" text-lg text-zinc-400 ">{data.description}</div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section >
    )
}