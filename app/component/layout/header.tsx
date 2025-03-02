'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathName = usePathname()
    const isActive = (path: string) => pathName.startsWith(path) ? 'text-primary' : 'text-content'
    return (
        <header className="bg-background lg:px-[50px] lg:py-5 md:py-[15px] md:px-[50px] px-[30px] py-[15px] ">
            <nav className="flex justify-between items-center">
                <Link className="flex items-center lg:gap-[10px] gap-[5px]" href="/">
                    <Image
                        width={32}
                        height={32}
                        className="w-6 h-6 lg:w-full lg:h-full"
                        src="/assets/images/logo.png"
                        alt="logo"
                    />
                    <Image 
                        width={199.414}
                        height={19.8}
                        className="lg:w-full lg:h-full w-[149.56px] h-[14.85px] relative top-[3px]"
                        src="/assets/images/nft-marketplace-1@2x.svg" alt="name" />
                </Link>
                <ul className="lg:flex justify-center items-center gap-[10px] hidden">
                    <li className="px-5 h-[46px] flex items-center trans">
                        <Link href="/nft" className={`text-base font-semibold leading-[140%] ${isActive("/nft")}`}>Marketplace</Link>
                    </li>
                    <li className="px-5 h-[46px] flex items-center trans">
                        <Link href="/ranking" className={`text-base font-semibold leading-[140%] ${isActive("/ranking")}`}>Rankings</Link>
                    </li>
                    <li className="px-5 h-[46px] flex items-center trans">
                        <Link href="/connect-wallet" className={`text-base font-semibold leading-[140%] ${isActive("/connect-wallet")}`}>Connect a wallet</Link>
                    </li>
                    <Link className="button button--trans px-[30px]" href="#">
                        <Image 
                            width={20}
                            height={20}
                            src="/assets/images/User.png" alt="user_icon"/>
                            <span>Sign Up</span>
                    </Link>
                </ul>
                <div className="lg:hidden">
                    <Image width={24} height={24} src="/assets/images/Burger Menu.png" alt=""/>
                </div>
            </nav>
        </header>
    );
}