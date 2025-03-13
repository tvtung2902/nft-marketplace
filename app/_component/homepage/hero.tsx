import { getNftsById } from "@/app/_service/nftService";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  const nft = await getNftsById(7);
  return (
    <>
      {/*hero*/}
      <section className="hero lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto lg:py-20 py-10">
        <div className="hero__frame lg:gap-[30px] md:gap-y-[20px] gap-y-[40px] gap-x-[30px] grid md:grid-cols-2 ">
          <div className="hero__content flex flex-col items-start gap-[30px]">
            <div className="hero__wrap-title flex flex-col items-start md:gap-5 gap-2.5">
              <h1 className="hero__title lg:text-[67px] md:text-[38px] text-[28px] font-semibold leading-[110%] capitalize">
                Discover digital art & Collect Nfts
              </h1>
              <p className="hero__subtitle lg:text-[22px] text-[16px] font-normal lg:leading-[160%] leading-[140%] capitalize">
                Nft marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k Nft artists.
              </p>
            </div>
          </div>
          <Link href={`/nft/${nft.id}`} className="hero__highlight trans flex flex-col items-center lg:h-[510px] h-[330px] w-full grid-area-[img] md:row-span-2 self-center">
            <Image
              className="hero__image rounded-t-[20px] lg:h-[78%] h-[223px] w-full object-cover"
              src={nft.image}
              alt="image-placeholder"
              width={500}
              height={400}
            />
            <div className="hero__highlight-content flex flex-col justify-center gap-[10px] p-5 rounded-b-[20px] w-full bg-tertiary flex-1">
              <h3 className="text-[22px] font-semibold capitalize">Space Walking</h3>
              <div className="hero__highlight-info flex items-center gap-3 w-full">
                <Image
                  className="hero__highlight-avatar w-6 h-6 object-cover rounded-full"
                  src="/assets/images/Avatar Placeholder.png"
                  alt="avatar"
                  width={24}
                  height={24}
                />
                <span className="hero__highlight-name text-[16px] font-normal leading-[140%]">Animakid</span>
              </div>
            </div>
          </Link>
          <div className="flex flex-col lg:gap-[30px] md:gap-5 gap-10">
            <a className="hero__button button trans grid-area-[button] md:self-start px-[50px]">
              <Image src="/assets/images/RocketLaunch.png" alt="icon" width={40} height={40} />
              <span>Get Started</span>
            </a>
            <ul className="hero__additional-info flex items-start gap-[30px] justify-between">
              <li className="flex flex-col items-start">
                <h3 className="lg:text-[28px] text-[22px] font-bold lg:leading-[140%] leading-[160%] capitalize font-space-mono">240K+</h3>
                <span className="lg:text-[24px] text-[16px] font-normal leading-[160%] capitalize">Total Sale</span>
              </li>
              <li className="flex flex-col items-start">
                <h3 className="lg:text-[28px] text-[22px] font-bold lg:leading-[140%] leading-[160%] capitalize font-space-mono">100K+</h3>
                <span className="lg:text-[24px] text-[16px] font-normal leading-[160%] capitalize">Auctions</span>
              </li>
              <li className="flex flex-col items-start">
                <h3 className="lg:text-[28px] text-[22px] font-bold lg:leading-[140%] leading-[160%] capitalize font-space-mono">240+</h3>
                <span className="lg:text-[24px] text-[16px] font-normal leading-[160%] capitalize">Artists</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*end hero*/}
    </>
  )
}