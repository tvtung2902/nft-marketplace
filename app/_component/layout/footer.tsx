import Image from "next/image";
import Link from "next/link";
import FormSub from "../form-sub";

export default function Footer() {

    return (
        <footer className={`py-10 bg-tertiary`}>
            <div
                className="lg:max-w-[1050px]  md:max-w-[690px] max-w-[315px] mx-auto flex flex-col lg:gap-[30px] md:gap-[49px] gap-[35px]">
                <div
                    className="lg:max-w-[1010px] lg:mx-auto flex justify-between items-start lg:flex-row flex-col lg:gap-0 gap-[30px]">
                    <div
                        className="flex lg:w-[327.414px] lg:pr-[84px] flex-col items-start lg:gap-[30px] gap-5 w-full">
                        <Link href='#' className=" flex items-center gap-[10px]">
                            <Image width={32}
                                height={32} className="w-6 h-6 lg:w-8 lg:h-8" src="/assets/images/logo.png" alt="logo" />
                            <Image width={199.414}
                                height={19.8}
                                className="lg:w-full lg:h-full w-[149.56px] h-[14.85px] relative top-[3px]" src="/assets/images/nft-marketplace-1@2x.svg" alt="name" />
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
                            <FormSub />
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