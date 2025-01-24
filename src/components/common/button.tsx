// import PropTypes from "prop-types";

import { ReactNode } from "react";


export default function Button({ type, text, className, onClick, loading, disabled }: {
  type?: string;
  text: string | ReactNode;
  className?: string;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean
}) {
  return (
    <button className={` font-comfortaa tracking-widest
    ${type === "inverted" ? " bg-[#fff]  text-[#F29254] rounded-full " :
        "bg-[#F29254] text-[#ffffff]  rounded-full "}  
    ${className?.length ? ` ${className}` :
        'w-full'} flex align-center justify-center py-4 cursor-pointer text-sm font-bold floating-button 
    ${loading || disabled ? "opacity-25" : ""} `}
      style={{ cursor: `${loading || disabled ? "not-allowed" : ""}` }}
      onClick={onClick}>
      {loading ? "Please wait..." : text}
    </button>
  )
}
