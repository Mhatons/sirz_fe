import { ReactNode } from "react"

interface ICard {
    icon: ReactNode;
    title: string;
    description: string
}
export default function Card(props: ICard) {
    const { icon, title, description } = props
    return (
        <div className="flex px-16 h-[200px] hover:transform hover:-translate-y-2 transition-transform duration-300 card_shadow cursor-pointer rounded-3xl p-6 items-center justify-center">
            <div className="flex items-center justify-center flex-col ">
                <div className="text-[50px] text-[#06C6D1] font-extrabold">{icon}</div>
                <header className="text-[23px] font-semibold whitespace-nowrap">{title}</header>
                <div className="text-center text-[17px]">{description}</div>
            </div>
        </div>
    )
}