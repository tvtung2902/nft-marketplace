import { getCollectionByName } from "@/app/_service/collectionService";
import CollectionList from "../collection/collection-list";
import HeadLine from "../headline";

export default async function TrendingCollection() {
    const collections = await getCollectionByName()
    return (
        <section className="trending-collection lg:py-20 py-10">
            <div className="trending-collection__wrapper lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto flex flex-col lg:gap-[60px] gap-[40px]">
                <HeadLine head="Trending Collection" subHead="Checkout our weekly updated trending collection." />
                <CollectionList collections={collections} />
            </div>
        </section>
    )
}