import { getNftsByOwner } from "@/app/_service/nftService";
import { Suspense } from "react";
import NftList from "@/app/component/nft/nft-list";
import ListNFTCardSkeleton from "@/app/component/skeleton/nft/list-nft-card-skeleton";

export default async function NFT_Owner({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <Suspense fallback={<ListNFTCardSkeleton numberCard={6} />}>
      <NftList functionFetchAPI={() => getNftsByOwner(Number(id))} />
    </Suspense>
  )
}