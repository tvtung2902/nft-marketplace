import Image from "next/image";
import { User } from "../_interface/user";
import Link from "next/link";

export default function RankingUser({ user, index }: { user: User, index: number }) {
    return (
        <div >
            <Link href={`/artist/${user.id}`} className="rankings__row-table rankings__row-table--body trans-1 flex items-center justify-center rounded-2xl bg-tertiary md:py-3 md:px-5 px-2 py-3">
                <div className="rankings__rank-number rankings__rank-number--body  md:w-[30px] md:mr-5 w-[24px] h-[24px] mr-2 flex items-center justify-center rounded-full lg:bg-background bg-tertiary md:h-[30px]">
                    <span className="text-start text-secondary font-space-mono md:text-[16px] text-[12px] font-normal leading-[140%]">
                        {index + 1}
                    </span>
                </div>
                <div className="rankings__wrap-artist rankings__wrap-artist--body flex-1 flex items-center lg:gap-5 gap-3">
                    <Image width={60} height={60} className="lg:w-[60px] lg:h-[60px]  w-[24px] h-[24px] object-cover rounded-full" src={user.avatar} alt="avatar" />
                    <h5 className="rankings__user-name  md:text-[22px] text-[16px] font-normal md:font-semibold leading-[140%] capitalize">{user.name}</h5>
                </div>
                <div className="rankings__change rankings__change--body font-space-mono text-[16px] font-normal leading-[140%] pr-5 text-[#00AC4F] lg:w-[160px] w-[120px] md:inline hidden">
                    <span>
                        {/*fix*/}
                        +1.41%
                    </span>
                </div>
                <div className="rankings__sold font-space-mono w-[160px] text-[16px] font-normal leading-[140%] pr-5 lg:inline hidden">
                    <span>
                        {user.nfts_sold}
                    </span>
                </div>
                <div className="rankings__volume font-space-mono lg:w-[160px] md:text-[16px] text-[12px] font-normal leading-[140%] w-[100px]">
                    {/*fix*/}
                    12.4 ETH
                </div>
            </Link>
        </div>
    )
}