import { NFT } from "@/app/_interface/nft";
import {default as NftListFromComponent} from "@/app/component/nft/nft-list";

export default async function NftList({ functionFetchNfts }: { functionFetchNfts: () => Promise<NFT[]> }) {
    const ntfs = await functionFetchNfts();
    return (
        <NftListFromComponent nfts={ntfs} />
    )
}