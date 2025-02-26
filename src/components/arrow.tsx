import { ReactNode } from "react";

interface Idata {
    icon: ReactNode,
}

export default function ArrowTemplate({icon}: Idata) {
    return (
        <div className=" bg-colorGreen h-12 w-12 flex items-center justify-center rounded-full">
            {icon}
        </div>
    )
}