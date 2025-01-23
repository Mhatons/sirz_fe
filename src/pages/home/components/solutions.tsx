import AnimatedCard from "../../../components/layout/animatedCard";
import sampleImg from '../../../assets/images/pexels-fotoaibe-1743226.jpg'

export default function Solutions() {
    const data = [
        {
            title: "Analysis",
            image: sampleImg,
            desc: "The first step in our services is to work closely with you to understand your business needs and goals.",
        },
        {
            title: "Analysis",
            image: sampleImg,
            desc: "The first step in our services is to work closely with you to understand your business needs and goals.",
        },
        {
            title: "Analysis",
            image: sampleImg,
            desc: "The first step in our services is to work closely with you to understand your business needs and goals.",
        },
    ]
    return (
        <div className="w-[85%] m-auto pt-12 ">
            <section className=" sm:grid grid-cols-2 gap-4 items-center text-sm justify-between pb-10">
                <h4 className=" text-[30px] max-sm:pb-4 leading-10">Haven & Hive Interiors Guarantees the very best taste at friendly price</h4>
                <div className="text-[23px] leading-8 text-zinc-500 font-light ">
                    We strive to create environments that reflect our clients' personalities and needs,
                    ensuring satisfaction through meticulous attention to detail and innovative design solutions.
                </div>
            </section>
            <section className=" sm:grid grid-cols-3 gap-8 ">
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