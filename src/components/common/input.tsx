import { RequiredIcon } from "../../assets/icons/svg";
import { IInputProps } from "../../constants/types";

export default function Input(props: IInputProps) {
    const { label, onChange, name, type, placeholder, required, value, classNames } = props
    return (
        <div>
            <label htmlFor="name" className={`${!classNames ? "mt-4" : ""} text-gray-700 dark:text-gray-100 flex items-center gap-1`}>
                {label}
                {required && <RequiredIcon />}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full p-3 border border-gray-300 rounded-lg bg-[#F4F4F5] dark:bg-background_dark focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}
                placeholder={placeholder}
            />
        </div>
    )
}