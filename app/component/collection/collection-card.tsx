import { Collection } from "@/app/_interface/collection";
import Image from "next/image";

export default function CollectionCard({collection,}:{collection: Collection}) {
    return (
        <div className="trending-collection__card flex flex-col items-start gap-4 flex-1">
            <div className="trending-collection__photo-and-number flex flex-col items-start gap-4 self-stretch w-[330px]">
                <Image width={330} height={330} src={collection.cover_image} alt="image-primary" className="trending-collection__photo-primary w-full rounded-2xl trans" />
                <div className="trending-collection__frame flex items-start gap-4 self-stretch h-[100px]">
                    <Image className="h-full flex-1 rounded-2xl object-cover trans" width={100} height={100} src={collection.preview_images[0]} alt="image-secondary" />
                    <Image className="h-full flex-1 rounded-2xl object-cover trans" width={100} height={100} src={collection.preview_images[1]} alt="image-secondary" />
                    <div className="trans trending-collection__number-additional h-full flex flex-col justify-center items-center gap-2 flex-1 bg-primary rounded-2xl px-4 py-8">
                        <span className="text-[22px] font-bold leading-[160%] capitalize font-space-mono">
                            {collection.nft_count}+
                        </span>
                    </div>
                </div>
            </div>
            <div className="trending-collection__content  bg-background p-0 flex flex-col gap-[10px]">
                <h3 className="text-[22px] font-semibold leading-[140%] capitalize inline">{collection.name}</h3>
                <div className=" trending-collection__info flex items-center gap-3">
                    <Image width={24} height={24} className="w-6 h-6 rounded-[50%] object-cover" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-88@2x.png"
                        alt="avatar" />
                    <span className="text-base font-normal leading-[140%]">
                        MrFox
                    </span>
                </div>
            </div>
        </div>
    )
}