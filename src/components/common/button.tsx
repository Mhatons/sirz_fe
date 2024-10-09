interface Ibutton {
    name: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function Button(props: Ibutton) {
    const { name } = props
    return (
        <button className=" bg-button border capitalize text-lg rounded-md border-white text-white py-3 px-7 font-extrabold">
            {name}
        </button>
    )
}