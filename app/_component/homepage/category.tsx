import Image from "next/image";
import { getCategory } from "../../_service/categoryService";

export default async function Category() {
    const categories = await getCategory()

    return (
        <>
            <section className="browse-category  lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto flex flex-col lg:py-20 py-10 lg:gap-[60px] gap-10">
                <h2 className="browse-category__heading lg:text-[51px] md:text-[38px] text-[28px] font-semibold leading-[110%] capitalize">
                    Browse Categories
                </h2>
                <div className="browse-category__wrap-card-grid  grid md:grid-cols-4 grid-cols-2 gap-[30px]">
                    {categories.map(category => (
                        <div key={category.id} className="browse-category__card trans flex flex-col p-0 rounded-[20px] bg-[#3B3B3B] relative">
                            <div className="browse-category__wrap-photo-icon lg:h-60 h-[142px]">
                                <div className="relative">
                                    <Image src={category.background_image} width={240} height={240} className="rounded-t-[20px] aspect-square blur-[1px]" alt="background" />

                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[7.5px] rounded-t-[20px]">
                                    </div>
                                </div>

                                {/* <Image className="rounded-t-[20px] aspect-square blur-[1px]" width={240} height={240} src={category.background_image} alt="background" /> */}
                                <div className="browse-category__category-icon relative lg:top-[-169px] top-[-113px] flex flex-col items-center">
                                    <Image className="rounded-t-[20px] flex-1 lg:w-[100px] lg:h-[100px] w-[80px] h-[80px]" width={100} height={100} src={category.icon_url} alt="category-icon" />
                                </div>
                            </div>
                            <div className="browse-category__collection-name flex items-start lg:px-[30px] px-[20px] pt-5 pb-[25px]">
                                <h3 className="lg:text-[22px] text-[16px] font-semibold leading-[140%] capitalize">{category.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}