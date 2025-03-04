'use client'
import { Collection } from "@/app/_interface/collection";
import { getCollectionByName } from "@/app/_service/collectionService";
import CollectionList from "@/app/component/collection/collection-list";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CollectionPage() {
    const params = useSearchParams()
    const name = params.get("name") || ""
    const [collections, setCollections] = useState<Collection[]>([]);
    useEffect(() => {
            const fetchNfts = async () => {
                const res = await getCollectionByName(name)
                setCollections(res)
            }
            fetchNfts()
        }
            , [name])
    return (
        <>
            <CollectionList collections={collections}/>
        </>
    )
}