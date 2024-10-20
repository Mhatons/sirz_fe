export function Input() {
    return (
        <input
            type="text"
            placeholder="select lanaguage"
            className=" p-1"
        />
    )
};

export function Select() {
    return (
        <select name="" id="" className="bg-purple-100 text-black text-[16px] font-semibold rounded-md font-sans px-2 py-1">
            <option value="">Select Language</option>
        </select>
    )
}


export interface IInputProps {
    label: string,
    name: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'number' | 'email' | 'password' | 'checkbox' | 'radio';
    placeholder?: string
    required?: boolean
    value: string | number;
    classNames?: string
}


export function FormInput(props: IInputProps) {
    const { label, onChange, name, type, placeholder, value, classNames } = props
    return (
        <div>
            <label htmlFor="name" className={`${!classNames ? "mt-4" : ""} text-white pb-1 capitalize flex items-center gap-1`}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary_color`}
                placeholder={placeholder}
            />
        </div>
    )
}