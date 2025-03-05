'use client'
import React from "react";
import { Skeleton } from "antd";

const NFTCardSkeleton = () => {
  return (
    <div className="flex w-[330px] flex-col trans">
      <Skeleton.Image
        style={{ width: "100%", height: 296, borderRadius: "20px 20px 0 0" }}
        active
      />
      <div className=" flex p-[20px_30px_25px_30px] flex-col gap-[25px] bg-background rounded-b-[20px]">
        <div className="flex flex-col gap-2.5">
          <Skeleton.Input active style={{ width: 310, height: 30 }} />
          <div className="flex items-center gap-3">
            <Skeleton.Avatar active size={24} shape="circle" />
            <Skeleton.Input active size="small" style={{display: "flex",  height: 14 }} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Skeleton.Input size="small" active style={{ height: 14 }} />
            <Skeleton.Input size="small" active style={{ height: 27 }} />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton.Input size="small" active style={{ width: "10px", height: 14 }} />
            <Skeleton.Input size="small" active style={{ width: "10px", height: 27 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCardSkeleton;
