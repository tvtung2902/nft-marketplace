import { getCollectionByCreator } from "@/app/_service/collectionService";
import {default as CollectionListFromComponent} from "@/app/component/collection/collection-list";
import ListNFTCardSkeleton from "@/app/component/skeleton/nft/list-nft-card-skeleton";
import { Suspense } from "react";

export default async function CollectionList({creatorId}: {creatorId: number}) {
    const collections = await getCollectionByCreator(Number(creatorId));
    return (
        <>
            <Suspense fallback={<ListNFTCardSkeleton numberCard={3} />}>
                <CollectionListFromComponent collections={collections} />
            </Suspense >
        </>
    )
}