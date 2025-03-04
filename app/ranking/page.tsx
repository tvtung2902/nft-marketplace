import Image from "next/image";
import HeadLine from "../component/headline";
import RankingTab from "./ranking-tab";
import RankingListUser from "./ranking-list-user";
import { Suspense } from "react";

export default function RankingPage({searchParams } : { searchParams: { tab?: string } }) {
    return (
        <>
            <section className="head lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto py-[80px]">
                <HeadLine head="Top Creators" subHead="Check out top ranking NFT artists on the NFT Marketplace." />
            </section>


            <section className="rankings lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto pb-10 flex flex-col gap-10">
                <RankingTab />

                <div className="rankings__wrap-table">

                    <table className="rankings__table flex flex-col gap-5">
                        <thead>
                            <tr className="rankings__row-table  rankings__head-table md:py-3 md:px-5 px-2 py-3 flex items-center justify-center rounded-2xl border border-tertiary">
                                <th className="rankings__rank-number text-start text-secondary font-space-mono lg:text-[16px] text-[12px] font-normal leading-[140%]  md:w-[30px] md:mr-5 w-[24px] h-[24px] mr-2 flex items-center justify-center">#</th>
                                <th className="rankings__wrap-artist text-start text-secondary font-space-mono lg:text-[16px] text-[12px] font-normal leading-[140%] flex-1">Artist</th>
                                <th className="rankings__change text-start text-secondary font-space-mono lg:text-[16px] text-[12px] font-normal leading-[140%] lg:w-[160px] w-[120px] md:inline hidden">Change</th>
                                <th className="rankings__sold text-start text-secondary font-space-mono lg:text-[16px] text-[12px] font-normal leading-[140%] w-[160px] lg:inline hidden">NFTs Sold</th>
                                <th className="rankings__volume text-start text-secondary font-space-mono lg:text-[16px] text-[12px] font-normal leading-[140%] lg:w-[160px] w-[100px]">Volume</th>
                            </tr>
                        </thead>
                        <tbody className="flex flex-col gap-5">
                            <Suspense fallback={'loading'}>
                                <RankingListUser tab = {searchParams.tab || 'today'}/>
                            </Suspense>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}