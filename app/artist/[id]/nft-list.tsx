import { NFT } from "@/app/_interface/nft";
import {default as NftListFromComponent} from "@/app/_component/nft/nft-list";
import EmptyData from "@/app/_component/empty-data";

export default async function NftList({ functionFetchNfts, isScroll = false, bgColorCardContent = 'background'  }: { functionFetchNfts: () => Promise<NFT[]> , isScroll?:boolean
    ,bgColorCardContent?:string
}) {
    const ntfs = await functionFetchNfts();
    return (
        <>
            {ntfs?.length > 0 ? <NftListFromComponent nfts={ntfs} isScroll = {isScroll} bgColorCardContent={bgColorCardContent}/>
            : <EmptyData />}
        </>
    )
}