'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathName = usePathname();
    // const background = (pathName.match('/ranking') || pathName.match(/^nft\/\d+$/)) ? 'bg-tertiary' : '';
    const background = (/^\/ranking$/.test(pathName) || /^\/nft\/\d+$/.test(pathName)) ? 'bg-tertiary' : '';

    return (
        <footer className={`py-10 ${background}`}>
            <div
                className="lg:max-w-[1050px]  md:max-w-[690px] max-w-[315px] mx-auto flex flex-col lg:gap-[30px] md:gap-[49px] gap-[35px]">
                <div
                    className="lg:max-w-[1010px] lg:mx-auto flex justify-between items-start lg:flex-row flex-col lg:gap-0 gap-[30px]">
                    <div
                        className="flex lg:w-[327.414px] lg:pr-[84px] flex-col items-start lg:gap-[30px] gap-5 w-full">
                        <Link href='#' className=" flex items-center gap-[10px]">
                            <img src="/assets/images/logo.png" alt="logo" />
                            <img className="relative top-[2px]" src="/assets/images/nft-marketplace-1@2x.svg" alt="name" />
                        </Link>
                        <div className="flex flex-col items-start gap-5">
                            <p className="text-base font-normal leading-[140%] text-[#cccccc]">NFT marketplace UI created with Anima for
                                Figma.</p>
                            <div className="flex flex-col items-start gap-[15px]">
                                <p className="text-base font-normal leading-[140%] text-[#cccccc]">Join our community</p>
                                <div className="flex items-start gap-2.5">
                                    <Link href="#">
                                        <Image width={32} height={32} src="/assets/images/discordlogo-1@2x.svg" alt="discord" />
                                    </Link>
                                    <Link href="#">
                                        <Image width={32} height={32} src="/assets/images/youtubelogo-1@2x.svg" alt="youtube" />
                                    </Link>
                                    <Link href="#">
                                        <Image width={32} height={32} src="/assets/images/twitterlogo-1@2x.svg" alt="twitter" />
                                    </Link>
                                    <Link href="#">
                                        <Image width={32} height={32} src="/assets/images/instagramlogo-1@2x.svg" alt="instagram" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-60 flex-col items-start gap-[25px]">
                        <h5 className="font-bold text-[22px] leading-[160%] capitalize">Explore</h5>
                        <div className="flex flex-col items-start gap-5">
                            <p className="text-base font-normal leading-[140%] text-[#cccccc]">Marketplace</p>
                            <p className="text-base font-normal leading-[140%] text-[#cccccc]">Rankings</p>
                            <p className="text-base font-normal leading-[140%] text-[#cccccc]">Connect a wallet</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-[25px] w-full lg:w-fit">
                        <h5 className="font-bold text-[22px] leading-[160%] capitalize">Join our weekly digest</h5>
                        <div className="flex flex-col items-start gap-5 w-full">
                            <p className="text-base font-normal leading-[140%] text-[#cccccc] w-full md:w-fit">Get exclusive promotions &
                                updates straight
                                to your inbox.</p>
                            <form
                                className="flex md:flex-row flex-col items-center justify-center rounded-[20px] md:bg-white bg-background md:gap-0 gap-[15px] md:h-[60px] w-full md:w-[420px]">
                                <input
                                    className="px-5 py-4 rounded-2xl h-15 text-base 
                font-normal leading-[140%] text-background bg-white focus:outline-none placeholder:text-[16px] w-full h-[46px] md:h-full"
                                    type="text" placeholder="Enter your email here" />
                                <button className="button button--trans px-[50px] w-full md:w-fit h-[46px] md:h-full">
                                    <span>Subscribe</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start gap-5">
                    <div className="bg-secondary w-full h-px"></div>
                    <p className="text-xs font-normal leading-[110%] text-[#cccccc]">Ⓒ NFT Market. Use this template freely.</p>
                </div>
            </div>
        </footer>
    );
}