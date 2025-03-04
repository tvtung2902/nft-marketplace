import { getNftsByCreator } from "@/app/_service/nftService";
import NftList from "@/app/component/nft/nft-list";
import ListNFTCardSkeleton from "@/app/component/skeleton/nft/list-nft-card-skeleton";
import { Suspense } from "react";

export default async function NFT_Created({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <Suspense fallback={<ListNFTCardSkeleton numberCard={6}/>}>
      <NftList functionFetchAPI={() => getNftsByCreator(Number(id))} />
    </Suspense>
  )
}