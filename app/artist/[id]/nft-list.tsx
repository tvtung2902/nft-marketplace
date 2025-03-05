import { NFT } from "@/app/_interface/nft";
import {default as NftListFromComponent} from "@/app/_component/nft/nft-list";

export default async function NftList({ functionFetchNfts, isScroll = false }: { functionFetchNfts: () => Promise<NFT[]> , isScroll?:boolean}) {
    const ntfs = await functionFetchNfts();
    return (
        <NftListFromComponent nfts={ntfs} isScroll = {isScroll}/>
    )
}