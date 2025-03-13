import { Suspense } from "react";
import CollectionList from "./collection-list";
import ListCollectionCardSkeleton from "@/app/_component/skeleton/collection/list-collection-card";
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