// import { ReactNode } from "react"

// interface ICard {
//     icon: ReactNode;
//     title: string;
//     description: string
// }
// export default function Card(props: ICard) {
//     const { icon, title, description } = props
//     return (
//         <div className="flex px-16 h-[200px] hover:transform hover:-translate-y-2 transition-transform duration-300 card_shadow cursor-pointer rounded-3xl p-6 items-center justify-center">
//             <div className="flex items-center justify-center flex-col ">
//                 <div className="text-[50px] text-[#06C6D1] font-extrabold">{icon}</div>
//                 <header className="text-[23px] font-semibold whitespace-nowrap">{title}</header>
//                 <div className="text-center text-[17px]">{description}</div>
//             </div>
//         </div>
//     )
// }


interface Idata {
    title: string,
    desc: string,
    image: string
}

export default function Card(props: Idata) {
    const { title, desc, image } = props;
    return (
        <div className=" cursor-pointer relative cardcontainer overflow-y-hidden mb-4 rounded-3xl h-[250px]">
            <img src={image} alt="" className=' w-full object-cover h-full rounded-3xl' />
            <div className=" absolute top-0 left-0 right-0 bottom-0  m-auto text-center cardButtonContainer flex items-center justify-center">
                <h4 className=' bg-[#2a84a0dd] text-white text-sm font-semibold max-w-[70%] p-2 rounded-sm'>{title}</h4>
            </div>
            <div className=' text-[16px]  text-white cardtext absolute bottom-0 p-2 rounded-t-3xl w-[90%] m-auto text-center hover:text-white'>
                <h4 className=' text-[18px] font-semibold pt-9'>{title}</h4>
                <div className='cardtext_desc text-zinc-400 pt-2'>{desc}</div>
            </div>
        </div>
    )
}