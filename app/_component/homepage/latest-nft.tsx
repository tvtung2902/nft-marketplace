import Image from "next/image";
import Link from "next/link";
import { getNftsById } from "@/app/_service/nftService";
import Auction from "../auction";

export default async function LatestNft() {
    const targetTime = Date.now() + 60 * 60 * 60 * 1000
    const latestNft = await getNftsById(1);
    return (
        <section
            style={{ backgroundImage: `url(${latestNft.image})` }}
            className="relative bg-lightgray bg-cover bg-center bg-no-repeat"
        >
            <div className="flex items-end self-stretch md:pt-[360px] md:pb-[60px] pt-[120px] pb-[40px] bg-gradient-to-b from-transparent to-[#A259FF]">
                <div className="lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto flex flex-col items-start gap-8 w-full">
                    <Link href="/artist/1" className="flex items-center gap-3 p-2.5 px-5 bg-[#3B3B3B] rounded-2xl">
                        <div>
                            <Image width={24} height={24} src="/assets/images/Avatar Placeholder.png" alt="avatar" />
                        </div>
                        <span className="text-lg font-normal leading-[140%] text-white">Shroomie</span>
                    </Link>

                    <div className=" w-full lg:gap-[30px] gap-x-0 gap-y-[30px] grid md:grid-cols-2">
                        <h2 className="lg:text-[51px] text-[38px] font-semibold capitalize leading-[110%] text-white">
                            Magic Mashrooms
                        </h2>
                        <div className="justify-self-end md:row-span-2 w-[315px]">
                            <Auction targetTime={targetTime} isHiddenBtn={true} />
                        </div>
                        <Link
                            href={`nft/${latestNft.id}`}
                            style={{ background: 'white' }}
                            className="trans button-1 font-medium rounded-lg justify-self-start px-[50px] md:w-fit w-full"

                        >
                            <Image width={20} height={20} src="/assets/images/Eye.png" alt="icon" />
                            <span style={{ color: '#2B2B2B' }}>See NFT</span>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}