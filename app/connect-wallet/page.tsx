import Image from "next/image";
import HeadLine from "../_component/headline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect wallet"
};

export default function ConnectWallet() {
  return (
    <section className="connect-wallet-and-cre-acc flex md:flex-row flex-col items-center lg:gap-[60px] gap-10 md:m-0 mb-10">
      <div className="connect-wallet-and-cre-acc__image-main connect-wallet-and-cre-acc__image-main--connect-wallet md:flex-1 lg:h-[80vh] md:h-[70vh] h-[42vh] w-full">
        <Image className="w-full h-full object-cover" height={642} width={610} src="/assets/images/Image Placeholder (2).png" alt="image-placeholder" />
      </div>
      <div className="connect-wallet-and-cre-acc__connect flex-1 flex flex-col gap-10">
        <div className="lg:max-w-[500px] md:max-w-[400px] max-w-[315px]">
          <HeadLine head="Connect wallet" subHead="Choose a wallet you want to connect. There are several wallet providers." />
        </div>

        <div className="connect-wallet-and-cre-acc__wallet-options flex md:w-[325px] w-full flex-col gap-5">
          <div className="connect-wallet-and-cre-acc__item-btn flex items-center gap-5 h-[72px] px-10 bg-tertiary rounded-[20px] border border-primary">
            <Image width={40} height={40} src="/assets/images/metamask.png" alt="icon" />
            <span className="leading-[30.8px] text-[22px] font-semibold capitalize">Metamask</span>
          </div>
          <div className="connect-wallet-and-cre-acc__item-btn flex items-center gap-5 h-[72px] px-10 bg-tertiary rounded-[20px] border border-primary">
            <Image width={40} height={40} src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/walletconnect@2x.svg" alt="icon" />
            <span className="leading-[30.8px] text-[22px] font-semibold capitalize">Wallet Connect</span>
          </div>
          <div className="connect-wallet-and-cre-acc__item-btn flex items-center gap-5 h-[72px] px-10 bg-tertiary rounded-[20px] border border-primary">
            <Image width={40} height={40} src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/coinbase@2x.svg" alt="icon" />
            <span className="leading-[30.8px] text-[22px] font-semibold capitalize">Coinbase</span>
          </div>
        </div>
      </div>
    </section>
  )
}