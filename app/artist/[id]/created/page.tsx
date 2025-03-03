import { getNftsByCreator } from "@/app/_service/nftService";
import NFT_List from "@/app/component/nft/nft-list";

export default async function NFT_Created({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params
    const nfts = await getNftsByCreator(Number(id));
    return (
        <>
            <NFT_List nfts={nfts} />
        </>
    )
}