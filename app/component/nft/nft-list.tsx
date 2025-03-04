import NFT_Card from "./nft-card";
import { NFT } from "@/app/_interface/nft";
export default async function NftList({ functionFetchAPI, }: { functionFetchAPI: () => Promise<NFT[]> }) {
    const nfts = await functionFetchAPI();
    return (
        <>
            <div className="lg:max-w-[1050px]  md:max-w-[690px] max-w-[315px] mx-auto flex flex-wrap gap-[30px]">
                {nfts.map(nft => (
                    <>
                        <NFT_Card key={nft.id} nft={nft} />
                    </>
                ))}

            </div>
        </>
    )
}