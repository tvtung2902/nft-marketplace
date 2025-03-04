import CollectionCard from "./collection-card";
import { Collection } from "@/app/_interface/collection";

export default function CollectionList({ collections }: { collections: Collection[] }) {
    return (
            <div className="trending-collection__wrap-card flex flex-row flex-wrap items-start gap-[30px] lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto">
                {collections.map(collection => (
                    <CollectionCard key={collection.id} collection={collection} />
                ))}
            </div>
    )
}