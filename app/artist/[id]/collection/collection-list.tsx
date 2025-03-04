import { getCollectionByCreator } from "@/app/_service/collectionService";
import { default as CollectionListFromComponent } from "@/app/component/collection/collection-list";

export default async function CollectionList({ creatorId }: { creatorId: number }) {
    const collections = await getCollectionByCreator(Number(creatorId));
    return (
        <CollectionListFromComponent collections={collections} />
    )
}