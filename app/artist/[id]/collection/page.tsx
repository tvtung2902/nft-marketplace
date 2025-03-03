import { getCollectionByCreator } from "@/app/_service/collectionService";
import CollectionList from "@/app/component/collection/collection-list";

export default async function NFT_Onwned({
    params,
  }: {
    params: Promise<{ id: string }>
  }){

    const { id } = await params
        const collections = await getCollectionByCreator(Number(id));
    return(
        <>  
            <CollectionList collections={collections}/>
        </>
    )
}