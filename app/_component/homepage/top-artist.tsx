import Image from "next/image";
import HeadLine from "../headline";
import Link from "next/link";
import { getTopArtist } from "@/app/_service/userService";

export default async function TopArtist() {
    const users = await getTopArtist()
    return (
        <>
            <section className="top-rated-artists lg:py-20 py-10">
                <div className="top-rated-artists__wrapper lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto grid md:grid-cols-2 gap-y-10">
                    <div className="lg:w-[700px] md:w-[350px]">
                        <HeadLine head='Top creators' subHead='Checkout Top Rated Creators on the NFT Marketplace' />
                    </div>
                    <Link className="top-rated-artists__button button-1 border-2 border-primary px-[50px] trans md:justify-self-end justify-self-auto md:order-none order-3" href="/ranking">
                        <Image width={20} height={20} src="/assets/images/RocketLaunch-1.png" alt="icon" />
                        <span>View Ranking</span>
                    </Link>
                    <div className="top-rated-artists__wrap-card-grid md:col-span-2 w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        {users.map((user, index) => (
                             <Link href={`/artist/${user.id}`} key={index} className="trans flex lg:flex-col flex-row items-center gap-5 p-5 rounded-[20px] bg-[#3B3B3B] relative">
                             <Image
                                 width={120}
                                 height={120}
                                 className="lg:w-[120px] lg:h-[120px] w-[60px] h-[60px] rounded-full object-cover"
                                 src={user.avatar}
                                 alt="avatar"
                             />
                             <div className="flex flex-col items-start lg:items-center justify-center gap-[5px] w-full">
                                 <h3 className="text-[22px] font-semibold leading-[140%] capitalize">{user.name}</h3>
                                 <div className="flex lg:justify-center items-start gap-2 w-full relative">
                                     <span className="text-secondary text-[16px] font-normal leading-[140%]">Total Sales:</span>
                                     <span className="text-[16px] font-normal leading-[140%]">{user.total_sales} ETH</span>
                                 </div>
                             </div>
                             <div className="absolute lg:top-[18px] lg:left-[20px] top-[10px] left-[15px] w-[30px] h-[30px] bg-background rounded-2xl flex items-center justify-center">
                                 <span className="text-[16px] font-normal leading-[140%] text-secondary">{index + 1}</span>
                             </div>
                         </Link>
                        ))}
                       
                    </div>
                </div>
            </section>
        </>
    )
}
