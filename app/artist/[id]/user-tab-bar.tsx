'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserTabBar({userId, }:{userId:number}) {
    const pathName = usePathname()
    const isActive = (path: string) => pathName.includes(path) ? 'text-content border-b-[2px] border-b-secondary' : 'text-secondary'
    return (
        <section className="border-t border-[#3B3B3B]">
            <div className="lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto mt-[10px] flex">
                <Link href={`/artist/${userId}/created`}
                    className={`${isActive('created')} flex-1 flex h-[60px] lg:px-[30px] px-[10px] items-center justify-center gap-4`}>
                    <span className={` lg:text-[22px] text-[16px] font-bold leading-[140%] capitalize`}>Created</span>
                    <span
                        className="rounded-[20px] px-[10px] py-[5px] bg-secondary font-space-mono lg:text-base text-[12px] leading-[140%] hidden md:inline text-content">302</span>
                </Link>
                <Link href={`/artist/${userId}/owned`} 
                    className={`${isActive('owned')} flex-1 flex h-[60px] lg:px-[30px] px-[10px] items-center justify-center gap-4`}>
                    <span className="lg:text-[22px] text-[16px] font-bold leading-[140%] capitalize">owned</span>
                    <span
                        className="rounded-[20px] px-[10px] py-[5px] bg-secondary font-space-mono lg:text-base text-[12px] leading-[140%] hidden md:inline text-content">67</span>
                </Link>
                <Link href={`/artist/${userId}/collection`} className={`${isActive('collection')} flex-1 flex h-[60px] lg:px-[30px] px-[10px] items-center justify-center gap-4`}>
                    <span className="lg:text-[22px] text-[16px] font-bold leading-[140%] capitalize">Collection</span>
                    <span
                        className="rounded-[20px] px-[10px] py-[5px] bg-secondary font-space-mono lg:text-base text-[12px] leading-[140%] hidden md:inline text-content">4</span>
                </Link>
            </div>
        </section>
    )
}