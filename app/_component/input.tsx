import Image from "next/image";
import { HTMLInputTypeAttribute } from "react";

interface InputProps {
    icon?: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    name: string;
}

export default function Input({ icon, type, placeholder, name }: InputProps) {
    return (
        <div className="connect-wallet-and-cre-acc__item-input flex h-[46px] px-4 py-5 items-center gap-3 rounded-[20px] border border-secondary bg-[#ffffff]">
            {icon && <Image className="w-5 h-5" width={20} height={20} src={icon} alt="icon" />}
            <input className="text-tertiary" type={type} placeholder={placeholder} name={name} />
        </div>
    );
}
