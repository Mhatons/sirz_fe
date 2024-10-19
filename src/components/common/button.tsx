
interface Ibutton {
    name: string,
    // onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function Button(props: Ibutton) {
    const { name } = props;
    return (
        <button
            onClick={() => window.open('https://t.me/Portalearn_bot', '_blank')}
            className=" bg-button border capitalize text-lg rounded-md border-white text-white py-3 px-7 font-extrabold">
            {name}
        </button>
    )
}