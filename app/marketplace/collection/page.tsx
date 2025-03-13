'use client'
import { Collection } from "@/app/_interface/collection";
import { getCollectionByName } from "@/app/_service/collectionService";
import CollectionList from "@/app/_component/collection/collection-list";
import ListCollectionCardSkeleton from "@/app/_component/skeleton/collection/list-collection-card";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import EmptyData from "@/app/_component/empty-data";

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
            {loading ? <ListCollectionCardSkeleton numberCard={3} /> :
                collections?.length > 0 ? <CollectionList collections={collections} /> :
                    <EmptyData />}
        </>
    )
}