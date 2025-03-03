import { getNftsByOwner } from "@/app/_service/nftService";
import NFT_List from "@/app/component/nft/nft-list";

export default async function NFT_Owner({
    params,
  }: {
    params: Promise<{ id: string }>
  }){
    const { id } = await params
    const nfts = await getNftsByOwner(Number(id));
    return(
        <>  
            <NFT_List nfts={nfts}/>
        </>
    )
}