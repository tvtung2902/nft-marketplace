import ListNFTCardSkeleton from "@/app/_component/skeleton/nft/list-nft-card-skeleton";
import { getNftsByCreator } from "@/app/_service/nftService";
import NftList from "@/app/artist/[id]/nft-list";
import { Suspense } from "react";

export default async function NftListOfUser({creatorId,}:{creatorId:number}) {
    return (
        <>
            <section className="py-[80px] bg-[#3B3B3B]">
                <Suspense fallback={<ListNFTCardSkeleton numberCard={6} />}>
                    <NftList functionFetchNfts={() => getNftsByCreator(creatorId)} isScroll={true} />
                </Suspense>
            </section>
        </>
    )
}