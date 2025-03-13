import HeadLine from "../_component/headline";
import TabNav from "../_component/tab-nav";
import MarketplaceSearch from "./marketplace-search";
import { getAllNftsCount } from "@/app/_service/nftService";
import { getAllCollectionsCount } from "@/app/_service/collectionService";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Marketplace"
};

export default async function LayoutMarketplace({
    children, 
}: {
    readonly children: React.ReactNode;
}) {

    const nftsCountPromise = getAllNftsCount();
    const collectionsCountPromise = getAllCollectionsCount()
    // parallel
    const [nftsCount, collectionsCount] = await Promise.all([nftsCountPromise, collectionsCountPromise])

    const list = [
        {
            link: '/marketplace/nft',
            sublink: 'nft',
            title: 'Nfts',
            number: nftsCount
        },
        {
            link: '/marketplace/collection',
            sublink: 'collection',
            title: 'Collections',
            number: collectionsCount
        }
    ]
    return (
        <>
            <section className="py-20">
                <div className="lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto flex flex-col gap-[30px]">
                    <HeadLine head="Browse Marketplace" subHead="Browse through more than 50k NFTs on the NFT Marketplace." />
                    <MarketplaceSearch />
                </div>
            </section>
            <TabNav list={list} />
            <section className="py-[80px] bg-[#3B3B3B]">
                {children}
            </section>
            <div className="h-0.5 bg-background"></div>
        </>
    );
}