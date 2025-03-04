
"use client";
import { Skeleton } from "antd";

export default function SkeletonCollectionCard() {
    return (
        <div className="trending-collection__card flex flex-col items-start gap-4 flex-1">
            <div className="trending-collection__photo-and-number flex flex-col items-start gap-4 self-stretch w-[330px]">
                <Skeleton.Image active style={{ width: 330, height: 330, borderRadius: 16 }} />

                <div className="trending-collection__frame flex items-start gap-4 self-stretch h-[100px]">
                    <Skeleton.Image active className="h-full flex-1 rounded-2xl" style={{ width: 100, height: 100, borderRadius: 16 }} />
                    <Skeleton.Image active className="h-full flex-1 rounded-2xl" style={{ width: 100, height: 100, borderRadius: 16 }} />
                    <Skeleton.Button active style={{ width: 100, height: 100, borderRadius: 16 }} />
                </div>
            </div>

            <div className="trending-collection__content p-0 flex flex-col gap-[10px]">
                <Skeleton.Input active style={{ width: 150, height: 30 }} />
                <div className="flex items-center gap-3">
                    <Skeleton.Avatar active size={24} shape="circle" />
                    <Skeleton.Input active size="small" style={{ display: "flex", height: 14 }} />
                </div>
            </div>
        </div>
    );
}
