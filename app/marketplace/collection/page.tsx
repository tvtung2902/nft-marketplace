'use client'
import { Collection } from "@/app/_interface/collection";
import { getCollectionByName } from "@/app/_service/collectionService";
import CollectionList from "@/app/_component/collection/collection-list";
import SkeletonCollectionCard from "@/app/_component/skeleton/collection/collection-card";
import ListCollectionCardSkeleton from "@/app/_component/skeleton/collection/list-collection-card";
import ListNFTCardSkeleton from "@/app/_component/skeleton/nft/list-nft-card-skeleton";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CollectionPage() {
    const params = useSearchParams()
    const name = params.get("name") || ""
    const [collections, setCollections] = useState<Collection[]>([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchNfts = async () => {
            setLoading(true)
            const res = await getCollectionByName(name)
            setCollections(res)
            setLoading(false)
        }
        fetchNfts()
    }
        , [name])
    return (
        <>
            {loading && <ListCollectionCardSkeleton numberCard={3} />}
            <CollectionList collections={collections} />
        </>
    )
}