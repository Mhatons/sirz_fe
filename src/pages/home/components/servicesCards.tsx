import PlainCard from "../../../components/layout/cards/plainCard"

const cardContent = [
    {
        title: "Customized Strategies",
        description: "No cookie-cutter solutions here! We tailor every strategy to fit your business needs, ensuring you get the best results for your brand’s growth."
    },
    {
        title: "Dedicated Support",
        description: "Forget bots—our expert team is here to guide you every step of the way. We are real people, with real solutions and we deliver real success!"
    },
    {
        title: "Proven Growth",
        description: "We don’t just promise results—we deliver them. Our data-driven approach has helped businesses scale and thrive in the digital space. Yours is next!"
    },
]

export default function Services() {
    return (

        <section className="">
            <div className=" grid sm:grid-cols-3 gap-5 w-[90%] py-8 m-auto">
                {
                    cardContent.map((item, index) => (
                        <div key={index}>
                            <PlainCard
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}