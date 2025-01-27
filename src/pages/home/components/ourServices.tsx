import Card from "../../../components/layout/card";
import { useNavigate } from "react-router-dom";
import { ServiceDetails } from "../../../constants/serviceMenu";

export default function OurService() {
    const navigate = useNavigate();

    const handleServiceClick = (selectedService: string) => {
        navigate(`/services/${selectedService}`);
    }

    return (
        <div id="services" className=" pt-12 pb-10">
            <header className=" text-[30px] text-center font-comfortaa">Our services</header>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 xxl:grid-cols-2 grid-cols-1 gap-x-6 gap-y-2 w-[95%] max-sm:flex-col py-10 m-auto items-center justify-center sm:justify-evenly">
                {Object.values(ServiceDetails).map((card, index) => (
                    <div onClick={() => handleServiceClick(card.title)} className=" cursor-pointer" key={index}>
                        <Card
                            title={card.title}
                            image={card.image}
                            desc={card.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}