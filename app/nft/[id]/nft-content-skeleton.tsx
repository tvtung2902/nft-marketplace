'use client';

import { Skeleton } from 'antd';

const SkeletonContentNft = () => {
    return (
        <div className="NFT-info__wrapper overflow-hidden">
            <Skeleton.Button
                style={{ width: 1750, height: 500 }}
                active
            />

            <section className="NFT-info py-10">
                <div className="NFT-info__wrapper lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto md:grid-cols-2 grid-cols-1 grid gap-y-[30px]">
                    <div className="NFT-info__headline flex flex-col gap-2.5">
                        <Skeleton.Input active style={{ width: 310, height: 40 }} />
                        <Skeleton.Input active style={{ width: 250, height: 28 }} />
                    </div>

                    <div className="NFT-info__wrapper-right md:row-span-2 md:justify-self-end">
                            <Skeleton.Input style={{width: 315, height: 270, borderRadius: 20}}/>
                    </div>

                    <div className="NFT-info__info-main flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-2.5">
                            <Skeleton.Input active size="small" />
                            <div className="flex items-center gap-3">
                                <Skeleton.Avatar active size={24} shape="circle" />
                                <Skeleton.Input active size='small' style={{ display: "flex", height: 14 }} />
                            </div>
                        </div>
                        <Skeleton.Input active size="small" />
                        <Skeleton paragraph={{ rows: 15 }} active />
                        <Skeleton.Input active size="small" />
                        <div className='flex gap-3 flex-col'>

                            <div className="flex items-center gap-3">
                                <Skeleton.Avatar active size={32} shape="circle" />
                                <Skeleton.Input active size='small' style={{ display: "flex", height: 26, width: 160 }} />
                            </div>
                            <div className="flex items-center gap-3">
                                <Skeleton.Avatar active size={32} shape="circle" />
                                <Skeleton.Input active size='small' style={{ display: "flex", height: 26, width: 160 }} />
                            </div>
                        </div>
                        <Skeleton.Input active size="small" />
                        <div className="NFT-info__wrap-btn flex flex-wrap gap-5 lg:flex-row flex-col items-start">
                                <Skeleton.Input active/>
                                <Skeleton.Input active/>
                                <Skeleton.Input active/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkeletonContentNft;
