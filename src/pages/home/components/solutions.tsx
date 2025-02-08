import AnimatedCard from "../../../components/layout/animatedCard";
import { IMAGES } from "../../../assets";

export default function Solutions() {
    const data = [
        {
            title: "Consultation & Concept Development",
            image: IMAGES.solutionImageThree,
            desc: `This is the initial phase where we discuss your vision, style preferences, budget, suitable curtain or blind options, including fabric types and colors, and functional needs. 
            We assess the space, take measurements, and create a mood board or design concept tailored to your requirements.`,
        },
        {
            title: "Design Finalization & Customization",
            image: IMAGES.solutionImageOne,
            desc: `At this stage, we finalize the design concept and carefully select high-quality materials for curtains, blinds, and other decor elements. 
            Our team ensures that fabrics, rods, tracks, or automated systems complement the overall interior theme. 
            Additionally, we refine space planning, color schemes, and lighting to create a cohesive and elegant design.`,
        },
        {
            title: "Installation & Final Touches",
            image: IMAGES.solutionImageTwo,
            desc: `Our professional team installs curtains, blinds, and other decor elements with precision, ensuring a seamless and elegant finish. 
            After installation, we handle adjustments, pleating, and draping for the perfect look. 
            We then add final styling touches like artwork and accessories, conduct a walkthrough to ensure everything aligns with the design plan, and provide maintenance tips before handing over the completed space.`,
        },
    ]
    return (
        <div className="sm:w-[85%] w-[95%] m-auto pt-12 ">
            <section className=" sm:grid grid-cols-2 gap-4 items-center text-sm justify-between pb-10">
                <h4 className=" text-[30px] max-sm:pb-4 leading-10">Haven & Hive Interiors Guarantees the very best taste at friendly price</h4>
                <div className="text-[23px] leading-8 text-zinc-500 font-light ">
                    We strive to create environments that reflect our clients' personalities and needs,
                    ensuring satisfaction through meticulous attention to detail and innovative design solutions.
                </div>
            </section>
            <section className=" grid xxm:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
                {
                    data.map((data, index) => (
                        <AnimatedCard
                            title={data.title}
                            index={index + 1}
                            desc={data.desc}
                            image={data.image}
                        />
                    ))
                }
            </section>
        </div>
    )
}