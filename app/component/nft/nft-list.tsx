import Image from "next/image";
import Link from "next/link";
import NFT_Card from "./nft-card";
import { NFT } from "@/app/_interface/nft";

export default function NFT_List({nfts,}:{nfts: NFT[]}) {
    return (
        <section className="py-[80px] bg-[#3B3B3B]">
            <div className="lg:max-w-[1050px]  md:max-w-[690px] max-w-[315px] mx-auto flex flex-wrap gap-[30px]">
                {nfts.map(nft => (
                    <NFT_Card key={nft.id} nft={nft}/>    
                ))} 
            </div>
        </section>
    )
}