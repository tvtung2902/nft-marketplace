'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabNav({ list, }: { list: any[] }) {
    const pathName = usePathname()
    const isActive = (path: string) => pathName.includes(path) ? 'text-content border-b-[2px] border-b-secondary' : 'text-secondary'
    return (
        <section className="border-t border-[#3B3B3B]">
            <div className="lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto mt-[10px] flex">
                {list.map((it, index) => (
                    <Link 
                        key={index}
                        href={it.link}
                        className={`${isActive(it.sublink)} flex-1 flex h-[60px] lg:px-[30px] px-[10px] items-center justify-center gap-4`}>
                        <span className={` lg:text-[22px] text-[16px] font-bold leading-[140%] capitalize`}>{it.title}</span>
                        <span
                            className="rounded-[20px] px-[10px] py-[5px] bg-secondary font-space-mono lg:text-base text-[12px] leading-[140%] hidden md:inline text-content">{it.number}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}