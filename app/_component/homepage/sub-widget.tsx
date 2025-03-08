import Image from "next/image";
import FormSub from "../form-sub";

export default function SubWidget() {
    return (
        <section className="subscribe-widget lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto lg:pt-10 lg:pb-20">
            <div className="subscribe-widget__wrap-content flex w-full p-[60px] items-center gap-[80px] rounded-[20px] bg-tertiary">
                <Image width={407} height={310} className="subscribe-widget__image flex-1 rounded-[20px] object-cover h-[310px]" src="/assets/images/photo.png" alt="photo" />
                <div className="subscribe-widget__frame flex flex-1 flex-col items-start gap-10">
                    <div className="subscribe-widget__headline flex flex-col items-start gap-2.5">
                        <h3 className="subscribe-widget__heading text-[37px] font-semibold leading-[120%] capitalize">
                            Join our weekly digest
                        </h3>
                        <p className="subscribe-widget__subhead text-[21px] font-normal leading-[160%] capitalize">Get exclusive promotions & updates straight to your inbox.</p>
                    </div>
                    <FormSub />
                </div>
            </div>
        </section>
    )
}