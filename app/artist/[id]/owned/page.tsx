import { getNftsByOwner } from "@/app/_service/nftService";
import ListNFTCardSkeleton from "@/app/_component/skeleton/nft/list-nft-card-skeleton";
import { Suspense } from "react";
import NftList from "../nft-list";
import { getUserById } from "@/app/_service/userService";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const user = await getUserById(Number(id))
    return {
        title: user.name,
    }
}

export default async function NFT_Created({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <Suspense fallback={<ListNFTCardSkeleton numberCard={6}/>}>
      <NftList functionFetchNfts={() => getNftsByOwner(Number(id))} />
    </Suspense>
  )
}