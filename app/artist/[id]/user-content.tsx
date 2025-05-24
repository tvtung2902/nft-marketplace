import { User } from "@/app/_interface/user";
import Image from "next/image";

export default function UserContent({user, }: {user: User}) {
    return (
    <>
        <section className="lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto py-10 flex flex-col gap-[30px]">
            <div className="flex justify-between lg:flex-row flex-col gap-[30px]">
                <h2 className="lg:text-[51px] md:text-[38px] text-[28px] font-semibold leading-[110%] capitalize text-center md:text-start">{user.name}
                </h2>
                <div className="flex gap-5 md:flex-row flex-col">
                    <a href="#" className="button button--trans px-[30px]">
                        <Image width={20} height={20} src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/copy@2x.svg" alt="icon" />
                        <span>{user.wallet_address}</span>
                    </a>
                    <a href="#" className="button-1 button--trans px-[50px] border-[2px] border-primary">
                        <Image width={20} height={20} src="/assets/images/Plus.svg" alt="icon" />
                        <span>Follow</span>
                    </a>
                </div>
            </div>
            <div className="max-w-[599px] flex gap-[30px] flex-col">
                <div className="max-w-[510px] flex lg:gap-[30px] gap-[20px]">
                    <div className="flex-1">
                        <h3 className="font-space-mono lg:text-[28px] text-[22px] font-bold">
                            {user.volume}+
                        </h3>
                        <span className="lg:text-[22px] text-[16px] font-normal leading-[160%] capitalize">Volume</span>
                    </div>

                    <div className="flex-1">
                        <h3 className="font-space-mono lg:text-[28px] text-[22px] font-bold">
                            {user.nfts_sold}+
                        </h3>
                        <span className="lg:text-[22px] text-[16px] font-normal leading-[160%] capitalize">NFTs Sold</span>
                    </div>

                    <div className="flex-1">
                        <h3 className="font-space-mono lg:text-[28px] text-[22px] font-bold">
                            {user.follower.length}+
                        </h3>
                        <span className="lg:text-[22px] text-[16px] font-normal leading-[160%] capitalize">Followers</span>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <h5 className="text-secondary font-space-mono lg:text-[22px] text-[16px] font-bold leading-[160%] capitalize">Bio
                    </h5>
                    <p className="lg:text-[22px] text-[16px] capitalize">{user.bio}</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <h5 className="text-secondary font-space-mono lg:text-[22px] text-[16px] font-bold leading-[160%] capitalize">Links
                    </h5>
                    <div className="flex gap-[10px]">
                        <a className=" object-cover" href={user.url_website}>
                            <Image width={32} height={32} src="/assets/images/discordlogo-1@2x.svg" alt="discord" />
                        </a>
                        <a className="object-cover" href={user.url_youtube}>
                            <Image width={32} height={32} src="/assets/images/youtubelogo-1@2x.svg" alt="youtube" />
                        </a>
                        <a className=" object-cover" href={user.url_twitter}>
                            <Image width={32} height={32} src="/assets/images/twitterlogo-1@2x.svg" alt="twitter" />
                        </a>
                        <a className=" object-cover" href={user.url_instagram}>
                            <Image width={32} height={32} src="/assets/images/instagramlogo-1@2x.svg" alt="instagram" />
                        </a>
                        <a className=" object-cover" href={user.url_discord}>
                            <Image width={32} height={32} src="/assets/images/twitterlogo-1@2x.svg" alt="twitter" />
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}