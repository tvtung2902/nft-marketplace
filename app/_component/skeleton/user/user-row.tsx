'use client'
import { Skeleton } from "antd";

export default function UserRowSkeleton() {
    return (
        <div className="rankings__row-table rankings__row-table--body flex items-center justify-center rounded-2xl bg-tertiary md:py-3 md:px-5 px-2 py-3">
            <div className="rankings__rank-number rankings__rank-number--body md:w-[30px] md:mr-5 w-[24px] h-[24px] mr-2 flex items-center justify-center rounded-full lg:bg-background bg-tertiary md:h-[30px]">
                <Skeleton.Avatar size={20} active shape="circle" />
            </div>
            <div className="rankings__wrap-artist rankings__wrap-artist--body flex-1 flex items-center lg:gap-5 gap-3">
                <Skeleton.Avatar size={60} active />
                <Skeleton.Input active style={{ width: 120 }} />
            </div>
            <div className="rankings__change rankings__change--body font-space-mono text-[16px] font-normal leading-[140%] pr-5 text-[#00AC4F] lg:w-[160px] w-[120px] md:inline hidden">
                <Skeleton.Input active style={{ width: 60 }} />
            </div>
            <div className="rankings__sold font-space-mono w-[160px] text-[16px] font-normal leading-[140%] pr-5 lg:inline hidden">
                <Skeleton.Input active style={{ width: 40 }} />
            </div>
            <div className="rankings__volume font-space-mono lg:w-[160px] md:text-[16px] text-[12px] font-normal leading-[140%] w-[100px]">
                <Skeleton.Input active style={{ width: 80 }} />
            </div>
        </div>
    )
}