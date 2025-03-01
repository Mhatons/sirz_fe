import { IInputProps } from "../../constants/types";

export default function Input(props: IInputProps) {
    const { onChange, name, type, placeholder, value } = props
    return (
        <div className="relative pt-2">
            {/* <label htmlFor="name" className={`${!classNames ? "mt-4" : ""} text-gray-700 dark:text-gray-100 absolute top-0 flex items-center gap-1`}>
                {label}
                {required && <RequiredIcon />}
            </label> */}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full p-3 border border-gray-300 dark:bg-colorDefaultDark rounded-lg bg-tranparent dark:bg-background_dark placeholder:text-[12px] focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}
                placeholder={placeholder}
            />
            <div className=" absolute top-0 left-3 bg-white px-2 text-[12px] text-zinc-500 font-comfortaa dark:bg-colorDefaultDark">{name}</div>
        </div>
    )
}