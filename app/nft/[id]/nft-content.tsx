import Auction from "@/app/_component/auction";
import ListNFTCardSkeleton from "@/app/_component/skeleton/nft/list-nft-card-skeleton";
import { getAllNftByTitle, getNftsByCreator, getNftsById } from "@/app/_service/nftService";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import NftListOfUser from "./nft-list-of-user";
import NftList from "@/app/artist/[id]/nft-list";

export default async function NftContent({ id }: { id: number }) {
    const nft = await getNftsById(id)
    const targetTime = Date.now() + 60 * 60 * 60 * 1000
    return (
        <>
            <img width={560} height={420} className="Image-back-ground lg:h-[560px] md:h-[420px] h-[320px] w-full object-cover" alt="background"
                // src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-7@1x.png"
                src={nft.image}
            />

            <section className="NFT-info py-10">
                <div
                    className="NFT-info__wrapper lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto md:grid-cols-2 grid-cols-1 grid gap-y-[30px]">
                    <div className="NFT-info__headline flex flex-col gap-2.5">
                        <h2 className="lg:text-[51px] md:text-[38px] text-[28px] font-semibold leading-[110%] capitalize">
                            {nft.title}
                        </h2>
                        <p className="lg:text-[22px] text-[16px] font-normal leading-[160%] capitalize text-secondary">Minted on {nft.minted_on}</p>
                    </div>

                    <div className="NFT-info__wrapper-right md:row-span-2 md:justify-self-end">
                        <Auction targetTime={targetTime} />
                    </div>

                    <div className="NFT-info__info-main flex flex-col gap-[30px]">
                        <Link href={`/artist/${nft.creator_id}`} className="NFT-info__cre-by flex flex-col gap-[10px]">
                            {/*fix user info*/}
                            <h5 className="text-secondary lg:text-[22px] text-[16px] font-bold leading-[160%] capitalize font-space-mono">
                                Create By</h5>
                            <div className="NFT-info__artist-card flex items-center gap-3 trans">
                                <Image width={24} height={24} className="w-6 h-6 object-cover" src="/assets/images/Avatar Placeholder (1).png" alt="avatar" />
                                <h5 className="lg:text-[22px] text-[16px] lg:font-semibold font-normal">Orbitian</h5>
                            </div>
                        </Link>
                        <div className="NFT-info__desc flex flex-col lg:gap-[20px] gap-[10px]">
                            <h5 className="text-secondary lg:text-[22px] text-[16px] font-bold leading-[160%] capitalize font-space-mono">
                                Description</h5>
                            {/*fix user desc*/}
                            <div className="NFT-info__content-desc">
                                <p className="lg:text-[22px] text-[16px] font-normal leading-[35.2px]">The Orbitians is a collection of 10,000
                                    unique NFTs on the Ethereum blockchain,</p>
                                <p className="lg:text-[22px] text-[16px] font-normal leading-[35.2px]">There are all sorts of beings in the NFT
                                    Universe. The most advanced and friendly of the bunch are
                                    Orbitians.</p>
                                <br /><br />
                                <p className="lg:text-[22px] text-[16px] font-normal leading-[35.2px]">They live in a metal space machines, high
                                    up in the sky and only have one foot on Earth.</p>
                                <br /><br />
                                <p className="lg:text-[22px] text-[16px] font-normal leading-[35.2px]">These Orbitians are a peaceful race, but
                                    they have been at war with a group of invaders for many
                                    generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the
                                    ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war
                                    if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                                </p>
                            </div>
                        </div>
                        <div className="NFT-info__details flex flex-col gap-2.5">
                            <h5 className="text-secondary lg:text-[22px] text-[16px] font-bold leading-[160%] capitalize font-space-mono">
                                Details</h5>
                            <Link href={nft.etherscan_url}
                                className="NFT-info__website-link flex items-center gap-2 lg:text-[22px] text-[16px] font-normal leading-[160%]">
                                <Image width={32} height={32} className="lg:w-8 lg:h-8 object-cover w-[24px] h-[24px]" src="/assets/images/Globe.svg" alt="icon-glo" />
                                <p>View on Etherscan</p>
                            </Link>
                            <Link href={nft.original_url}
                                className="NFT-info__website-link flex items-center gap-2 lg:text-[22px] text-[16px] font-normal leading-[160%]">
                                <Image width={32} height={32} className="lg:w-8 lg:h-8 object-cover w-[24px] h-[24px]" src="/assets/images/Globe.svg" alt="icon-glo" />
                                <p>View Original</p>
                            </Link>
                        </div>
                        <div className="NFT-info__tags flex flex-col gap-5">
                            <h5 className="text-secondary lg:text-[22px] text-[16px] font-bold leading-[160%] capitalize font-space-mono">Tags
                            </h5>
                            <div className="NFT-info__wrap-btn flex flex-wrap gap-5 lg:flex-row flex-col items-start">
                                {nft.tags.map(tag => (
                                    <>
                                        <Link href={`/tag/${tag}`} className="h-[46px] rounded-[20px] bg-tertiary flex justify-center items-center px-[30px]"><span
                                            className="text-[16px] font-semibold leading-[140%] uppercase">{tag}</span></Link>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[80px]">
                <div className="wrap-all lg:max-w-[1050px]  md:max-w-[690px] max-w-[315px] mx-auto md:grid md:grid-cols-2 flex flex-col gap-y-[60px]">
                    <h2 className="ntf-card__heading lg:text-[38px] text-[28px]  font-semibold leading-[120%] capitalize ">More from this artist</h2>
                    <Link href={`/artist/${nft.creator_id}`} className="button-1 trans md:order-none   order-3 md:justify-self-end px-[50px] bg-background border-2 border-primary">
                        <Image width={20} height={20} src="../assets/images/ArrowRight.svg" alt="icon" />
                        <span>Go To Artist Page</span>
                    </Link>
                    <Suspense fallback={<ListNFTCardSkeleton numberCard={6} />}>
                        <NftList functionFetchNfts={() => getNftsByCreator(nft.creator_id)} isScroll={true} bgColorCardContent='tetiarary'/>
                    </Suspense>
                </div>
            </section>

        </>
    )
}