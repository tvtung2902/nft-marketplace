'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  const isActive = (subpath: string) => pathName.startsWith(subpath) ? 'text-primary' : 'text-content';

  const navLinks = [
    { href: '/marketplace/nft', sublink: '/marketplace' , label: 'Marketplace' },
    { href: '/ranking', sublink: '/ranking' , label: 'Rankings' },
    { href: '/connect-wallet', sublink: '/connect-wallet', label: 'Connect a wallet' },
  ];

  return (
    <header className="bg-background lg:px-[50px] lg:py-5 md:py-[15px] md:px-[50px] px-[30px] py-[15px]">
      <nav className="flex justify-between items-center">
        <Link className="flex items-center lg:gap-[10px] gap-[5px]" href="/">
          <Image
            width={32}
            height={32}
            className="w-6 h-6 lg:w-8 lg:h-8"
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
          {navLinks.map((link) => (
            <li key={link.href} className="px-5 h-[46px] flex items-center trans">
              <Link
                href={link.href}
                className={`text-base font-semibold leading-[140%] ${isActive(link.sublink)}`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="px-5 h-[46px] flex items-center trans">
            <Link className="button button--trans px-[30px]" href="/sign-up">
              <Image 
                width={20}
                height={20}
                src="/assets/images/User.png" alt="user_icon" />
              <span>Sign Up</span>
            </Link>
          </li>
        </ul>

        <div className="lg:hidden">
          <Image width={24} height={24} src="/assets/images/Burger Menu.png" alt=""/>
        </div>
      </nav>
    </header>
  );
}
