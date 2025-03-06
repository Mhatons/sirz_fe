import { IButtonCard } from "../../../constants/types";
import Button from "../../common/button";
import HeaderFormat from "../../header";

export default function ButtonCard({ text, buttonText, title, onClick }: IButtonCard) {
    return (
        <div className="bg-colorNeutra dark:bg-colorDark py-10 px-5 rounded-3xl ">
            <HeaderFormat title={title} />
            <div className="py-10 text-[20px] text-center">
                {text}
            </div>
            <div className="w-[80%] m-auto">
                <Button text={buttonText} onClick={onClick} />
            </div>
        </div>
    )
}