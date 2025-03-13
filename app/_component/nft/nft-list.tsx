import NFT_Card from "./nft-card";
import { NFT } from "@/app/_interface/nft";
export default function NftList({ nfts, isScroll = false, bgColorCardContent = 'background' }: { nfts: NFT[], isScroll?: boolean, bgColorCardContent?: string }) {
    return (
        <>
            <div className="lg:max-w-[1050px]  md:max-w-[690px] max-w-[315px] mx-auto flex flex-wrap gap-[30px] md:col-span-2">
                {nfts.map(nft => (
                    <NFT_Card key={nft.id} nft={nft} isScroll={isScroll} bgColorCardContent={bgColorCardContent} />
                ))}

            </div>
        </>
    )
}