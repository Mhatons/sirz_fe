interface Idata {
    title: string,
    desc: string,
    index: number,
    image: string
}

export default function AnimatedCard(props: Idata) {
    const { title, desc, index, image } = props;
    return (
        <div className=" relative animatedcardcontainer overflow-y-hidden mb-4 rounded-3xl h-[350px]">
            <img src={image} alt="" className=' w-full object-cover h-full rounded-3xl' />
            <div className='bg-[#F9FCFF] dark:bg-background_dark dark:text-background_light text-[20px]  text-background_dark animatedcardtext absolute bottom-0 p-2 rounded-3xl rounded-br-none w-[90%] hover:text-white'>
                <p className=" text-zinc-400">{index}</p>
                <h4 className=' py-0'>{title}</h4>
                <div className='animatedcardtext_desc text-zinc-400'>{desc}</div>
            </div>
        </div>
    )
}