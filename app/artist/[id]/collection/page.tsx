import { Suspense } from "react";
import CollectionList from "./collection-list";
import ListCollectionCardSkeleton from "@/app/component/skeleton/collection/list-collection-card";

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
      <Suspense fallback={<ListCollectionCardSkeleton numberCard={3} />}>
        <CollectionList creatorId = {Number(id)}/>
      </Suspense >
    </>
  )
}