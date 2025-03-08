import Image from "next/image";
import HeadLine from "../headline";

export default function HowItWork() {
    return (
        <section className="how-it-work lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto lg:py-20 py-10 flex flex-col gap-[48px]">
            <HeadLine head="How it works" subHead="Find out how to get started." />
            <div className="how-it-work__wrap-card grid grid-cols-3 gap-[30px]">
                <div className="how-it-work__card flex p-[10px_30px_30px_30px] flex-col items-center gap-5 bg-tertiary rounded-[20px]">
                    <Image width={250} height={250} src="/assets/images/icon-3@2x.svg" alt="icon" className="how-it-work__image-main w-[250px] aspect-square object-cover" />
                    <div className="how-it-work__card-detail flex flex-col items-center gap-2.5">
                        <h5 className="how-it-work__card-title text-[22px] font-semibold leading-[140%] capitalize">
                            Setup Your wallet
                        </h5>
                        <p className="how-it-work__card-desc text-[16px] font-normal leading-[140%] text-center">Set up your wallet of choice. Connect it to the Animarket by clicking the
                            wallet icon in the top right corner.</p>
                    </div>
                </div>

                <div className="how-it-work__card flex p-[10px_30px_30px_30px] flex-col items-center gap-5 bg-tertiary rounded-[20px]">
                    <Image width={250} height={250} src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-4@2x.svg" alt="icon" className="how-it-work__image-main w-[250px] aspect-square object-cover" />
                    <div className="how-it-work__card-detail flex flex-col items-center gap-2.5">
                        <h5 className="how-it-work__card-title text-[22px] font-semibold leading-[140%] capitalize">
                            Create Collection
                        </h5>
                        <p className="how-it-work__card-desc text-[16px] font-normal leading-[140%] text-center">Upload your work and setup your collection. Add a description, social links and floor price.</p>
                    </div>
                </div>

                <div className="how-it-work__card flex p-[10px_30px_30px_30px] flex-col items-center gap-5 bg-tertiary rounded-[20px]">
                <Image width={250} height={250} src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-5@2x.svg" alt="icon" className="how-it-work__image-main w-[250px] aspect-square object-cover" />
                <div className="how-it-work__card-detail flex flex-col items-center gap-2.5">
                    <h5 className="how-it-work__card-title text-[22px] font-semibold leading-[140%] capitalize">
                        Start Earning
                    </h5>
                    <p className="how-it-work__card-desc text-[16px] font-normal leading-[140%] text-center">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
                </div>
            </div>
            </div>
        </section>
    )
}