import Image from "next/image";
import Link from "next/link";
import NftList from "@/app/artist/[id]/nft-list";
import { getNftsLimit3 } from "@/app/_service/nftService";
import HeadLine from "../headline";

export default async function NftsInHome() {
    return (
        <>
            <section className="discover-more lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto lg:py-20 py-10">
                <div className="discover-more__wrapper  grid md:grid-cols-2 gap-y-10 ">
                    <div className="lg:w-[700px] md:w-[350px]">
                        <HeadLine head='Discover More NFTs' subHead='Explore new trending NFTs' />
                    </div>
                    <Link className="top-rated-artists__button button-1 border-2 border-primary px-[50px] trans md:justify-self-end justify-self-auto md:order-none order-3" href="/marketplace">
                        <Image width={20} height={20} src="/assets/images/Eye.png" alt="icon" />
                        <span>See All</span>
                    </Link>
                    <div className="md:col-span-2">
                        <NftList functionFetchNfts={() => getNftsLimit3()} bgColorCardContent='tetiarary' isScroll = {true}/>
                    </div>
                </div>
            </section>
        </>
    )
}