'use client'
import { getAllNftByTitle } from "@/app/_service/nftService";
import { useSearchParams } from "next/navigation";
import NFT_List from "@/app/component/nft/nft-list-1";
import { Suspense, useEffect, useState } from "react";
import { NFT } from "@/app/_interface/nft";

export default function NftPage() {
    const params = useSearchParams()
    const title = params.get("title") || ""
    console.log("title", title)
    const [nfts, setNfts] = useState<NFT[]>([]);
    useEffect(() => {
        const fetchNfts = async () => {
            const res = await getAllNftByTitle(title)
            setNfts(res)
        }
        fetchNfts()
    }
        , [title])
    return (
        <NFT_List nfts={nfts} />
    )
}