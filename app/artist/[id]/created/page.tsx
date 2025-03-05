import { getNftsByCreator } from "@/app/_service/nftService";
import ListNFTCardSkeleton from "@/app/_component/skeleton/nft/list-nft-card-skeleton";
import { Suspense } from "react";
import NftList from "../nft-list";

export default async function NFT_Created({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <Suspense fallback={<ListNFTCardSkeleton numberCard={6}/>}>
      <NftList functionFetchNfts={() => getNftsByCreator(Number(id))} />
    </Suspense>
  )
}