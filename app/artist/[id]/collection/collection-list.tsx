import { getCollectionByCreator } from "@/app/_service/collectionService";
import { default as CollectionListFromComponent } from "@/app/_component/collection/collection-list";
import EmptyData from "@/app/_component/empty-data";

export default async function CollectionList({ creatorId }: { creatorId: number }) {
    const collections = await getCollectionByCreator(Number(creatorId));
    return (
        <>
            {collections?.length ? <CollectionListFromComponent collections={collections} />
            : <EmptyData />}
        </>
    )
}