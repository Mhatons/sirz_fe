import Card from "../../../components/layout/card";
import { sampleImage } from "../../../assets/images";

export default function OurService() {

    const cardMenu = [
        {
            image: sampleImage,
            title: "Interior Design Consultation",
            description: "Personalized consultations to understand client preferences and project requirements.",
        },
        {
            image: sampleImage,
            title: "Space Planning",
            description: "Optimizing layouts for functionality and aesthetics.",
        },
        {
            image: sampleImage,
            title: "Furniture Procurement and Installation",
            description: "Sourcing and installing quality furniture pieces that complement the design vision.",
        },
        {
            image: sampleImage,
            title: "Curtains & Window blind installation",
            description: "Design and installation of curtains and window blinds tailored to client specifications.",
        },
        {
            image: sampleImage,
            title: "Wall and Ceiling Finishes",
            description: "Application of wallpapers, specialized paints, and ceiling designs to enhance interior spaces.",
        },
        {
            image: sampleImage,
            title: "Custom Signage",
            description: "Design and fabrication of bespoke signage for corporate and residential clients.",
        },
        {
            image: sampleImage,
            title: "Flooring Solutions",
            description: "Installation of tiles, parquet, and interlocking systems to suit various design styles.",
        },
        {
            image: sampleImage,
            title: "Plaster of Paris (POP)",
            description: "Creating decorative elements for ceilings and walls.",
        },
        {
            image: sampleImage,
            title: "Project Management",
            description: "Overseeing interior projects from conception to completion, ensuring timely delivery and quality workmanship.",
        },
        {
            image: sampleImage,
            title: "Professional Advisory Services",
            description: "Offering expert advice on design trends, materials, and cost estimation to guide clients in making informed decisions.",
        },
        {
            image: sampleImage,
            title: "Routine Maintenance & Treatment",
            description: "Offering routine and schedules timely maintenance and treatment of furniture wares, including environmental fumigation.",
        },
    ];

    return (
        <div className=" pt-12 pb-10">
            <header className=" text-[30px] text-center font-comfortaa">Our services</header>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 xxl:grid-cols-2 grid-cols-1 gap-x-6 gap-y-2 w-[95%] max-sm:flex-col py-10 m-auto items-center justify-center sm:justify-evenly">
                {cardMenu.map((card, index) => (
                    <div className=" cursor-pointer" key={index}>
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