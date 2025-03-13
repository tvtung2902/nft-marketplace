import { NFT } from "@/app/_interface/nft";
import Image from "next/image";
import Link from "next/link";

export default function NFT_Card({ nft, isScroll= false , bgColorCardContent = 'background'}: { nft: NFT, isScroll?:boolean , bgColorCardContent?:string}) {
    const bgColors: { background: string; tetiarary: string } = {
        background: "bg-[#2B2B2B]",
        tetiarary: "bg-[#3B3B3B]",
    };
    
    return (
            <Link href={`/nft/${nft.id}`} className="flex w-[330px] flex-col trans" scroll={isScroll}>
                <Image
                    width={296}
                    height={238}
                    className="md:h-[296px] h-[238px] rounded-t-[20px] w-full object-cover"
                    src={nft.image}
                    alt="image-main"
                />
                <div className={`flex-1 flex p-[20px_30px_25px_30px] flex-col gap-[25px] ${bgColors[bgColorCardContent as keyof typeof bgColors]} rounded-b-[20px]`}>
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-[22px] font-semibold leading-[140%] capitalize">{nft.title}</h3>
                        <div className="flex items-center gap-3">
                            <Image
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-[50%] object-cover"
                                src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-88@2x.png"
                                alt="avatar"
                            />
                            <span className="text-base font-normal leading-[140%]">
                                MoonDancer
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2 font-space-mono">
                            <span className="text-secondary text-xs">Price</span>
                            <span>{nft.price}</span>
                        </div>
                        <div className="flex flex-col gap-2 font-space-mono">
                            <span className="text-secondary text-[12px]">Highest Bid</span>
                            <span className="ntf-card__info-item-value">{nft.highest_bid}</span>
                        </div>
                    </div>
                </div>
            </Link>
    );
}
