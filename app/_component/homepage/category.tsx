import { getCategory } from "@/app/_service/category";
import Image from "next/image";

export default async function Category() {
    const categories = await getCategory()
    return (
        <>
            <section className="browse-category  lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto flex flex-col lg:py-20 md:py-10 gap-[60px]">
                <h2 className="browse-category__heading lg:text-[51px] md:text-[38px] text-[28px] font-semibold leading-[110%] capitalize">
                    Browse Categories
                </h2>
                <div className="browse-category__wrap-card-grid  grid md:grid-cols-4  grid-cols-2 gap-[30px]">
                    {categories.map(category => (
                        <div className="browse-category__card trans flex flex-col p-0 rounded-[20px] bg-[#3B3B3B] relative">
                            <div className="browse-category__wrap-photo-icon h-60">
                                <Image className="rounded-t-[20px] aspect-square" width={240} height={240} src={category.background_image} alt="background" />
                                <div className="browse-category__category-icon relative top-[-169px] flex flex-col items-center">
                                    <Image className="rounded-t-[20px] flex-1 w-[100px] h-[100px]" width={100} height={100} src={category.icon_url} alt="category-icon" />
                                </div>
                            </div>
                            <div className="browse-category__collection-name flex items-start px-[30px] pt-5 pb-[25px]">
                                <h3 className="text-[22px] font-semibold leading-[140%] capitalize">{category.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}