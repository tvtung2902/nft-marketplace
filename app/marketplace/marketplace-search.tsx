"use client"
import Image from "next/image"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function MarketplaceSearch() {
    const router = useRouter()
    const pathName = usePathname()
    const searchParam = useSearchParams()
    const isNftPage = pathName.includes("nft")

    const searchType = isNftPage ? 'title' : 'name'
    const searchValue = searchParam.get(searchType) || ""

    console.log("searchValue: ", searchValue)
    const [search, setSearch] = useState(searchValue)
    const placeholder = isNftPage
        ? "Search your favourite NFTs by title"
        : "Search your favourite collections by name"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleSubmit = () => {
        router.push(`${pathName}?${searchType}=${search}`)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubmit()
        }
    }

    useEffect(() => {setSearch(searchValue)}, [searchValue])

    return (
        <div className="flex py-3 px-5 border border-tertiary rounded-[20px] gap-5">
            <input
                className="flex-1 text-gray-500 bg-background text-[16px] font-normal leading-[140%] outline-none
                placeholder:text-[12px] md:placeholder:text-[16px]"
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <Image
                width={24}
                height={24}
                className="w-6 h-6 cursor-pointer"
                src="../assets/images/MagnifyingGlass.svg"
                alt="icon"
                onClick={handleSubmit}
            />
        </div>
    )
}
