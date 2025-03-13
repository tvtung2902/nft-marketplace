
import { Metadata } from "next";
import Hero from "./_component/homepage/hero";
import TrendingCollection from "./_component/homepage/trending-collection";
import TopArtist from "./_component/homepage/top-artist";
import Category from "./_component/homepage/category";
import NftsInHome from "./_component/homepage/nfts";
import LatestNft from "./_component/homepage/latest-nft";
import HowItWork from "./_component/homepage/how-it-work";
import SubWidget from "./_component/homepage/sub-widget";

export const metadata: Metadata = {
  title: "Home"
};

export default function Home() {
  return (
    <>
        <Hero />
        <TrendingCollection />
        <TopArtist />
        <Category />
        <NftsInHome />
        <LatestNft />
        <HowItWork />
        <SubWidget />
    </>
  );
}