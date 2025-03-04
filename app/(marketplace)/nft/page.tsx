'use client'
import { getAllNftByTitle } from "@/app/_service/nftService";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { NFT } from "@/app/_interface/nft";
import NftList from "@/app/component/nft/nft-list";
import ListNFTCardSkeleton from "@/app/component/skeleton/nft/list-nft-card-skeleton";

export default function NftPage() {
    const params = useSearchParams()
    const title = params.get("title") || ""
    console.log("title", title)
    const [nfts, setNfts] = useState<NFT[]>([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchNfts = async () => {
            setLoading(true)
            const res = await getAllNftByTitle(title)
            setNfts(res)
            setLoading(false)
        }
        fetchNfts()
    }
        , [title])
    return (
       <>
         {loading && <ListNFTCardSkeleton numberCard={3}/>}
         <NftList nfts={nfts} />
       </>
    )
}