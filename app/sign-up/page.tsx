import Image from "next/image";
import HeadLine from "../_component/headline";
import FormSignUp from "./form-sign-up";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign up"
};

export default function SignUpPage() {

    return (
        <section className="connect-wallet-and-cre-acc flex md:flex-row flex-col items-center lg:gap-[60px] gap-10 md:m-0 mb-10">
            <div className="connect-wallet-and-cre-acc__image-main connect-wallet-and-cre-acc__image-main--cre-acc md:flex-1 lg:h-[100vh] md:h-[70vh] h-[42vh] w-full">
                <Image width={1250} height={691} className="w-full h-full object-cover" src="/assets/images/5d353eae4c7b063b0da73eddb78c3a89.png" alt="image-placeholder" />
            </div>
            <div className="connect-wallet-and-cre-acc__connect flex-1 flex flex-col gap-10">
                <div className="lg:max-w-[500px] md:max-w-[400px] max-w-[315px]">
                    <HeadLine head="Create Account" subHead="Welcome! Enter Your Details And Start Creating, Collecting And Selling Nfts." />
                </div>
                <FormSignUp />
            </div>
        </section>
    )
}