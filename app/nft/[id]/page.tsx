import { Suspense } from "react";
import NftContent from "./nft-content";
import SkeletonContentNft from "./nft-content-skeleton";
export default async function NftPageDetail({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params
    
    return (
        <>
            <Suspense fallback={<SkeletonContentNft />}>
                <NftContent id={Number(id)}/>
            </Suspense>
        </>
    )
}