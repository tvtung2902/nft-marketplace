import SkeletonCollectionCard from "./collection-card";

export default function ListCollectionCardSkeleton({numberCard, }: {numberCard:number, }) {
    return (
        <div className="lg:max-w-[1050px]  md:max-w-[690px] max-w-[315px] mx-auto flex flex-wrap gap-[30px]">
            {[...Array(numberCard)].map((_, index) => (
                <SkeletonCollectionCard />
            ))}
        </div>
    )
}