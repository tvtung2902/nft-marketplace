import { getCollectionByCreator } from "@/app/_service/collectionService";
import ListNFTCardSkeleton from "@/app/component/skeleton/nft/list-nft-card-skeleton";
import { Suspense } from "react";
import CollectionList from "./collection-list";

export default async function NFT_Onwned(
  {
    params,
  }: {
    params: Promise<{ id: string }>
  }
) {
  const { id } = await params
  return (
    <>
      <Suspense fallback={<ListNFTCardSkeleton numberCard={3} />}>
        <CollectionList creatorId = {id}/>
      </Suspense >

    </>
  )
}