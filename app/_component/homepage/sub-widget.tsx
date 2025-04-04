import Image from "next/image";
import FormSub from "../form-sub-1";

export default function SubWidget() {
    return (
            <section className="subscribe-widget lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto pt-10 md:pb-20 pb-10">
                <div className="subscribe-widget__wrap-content flex md:flex-row flex-col w-full md:p-[60px] items-center lg:gap-[80px] gap-[30px] rounded-[20px] md:bg-tertiary bg-background">
                    <Image width={407} height={310} className="subscribe-widget__image object-cover rounded-[20px] lg:w-[425px] lg:h-[310px] md:w-[300px] md:h-[280px] w-full h-[255px]" src="/assets/images/photo.png" alt="photo" />
                    <div className="subscribe-widget__frame flex flex-1 flex-col items-start gap-10">
                        <div className="subscribe-widget__headline flex flex-col items-start gap-2.5">
                            <h3 className="subscribe-widget__heading lg:text-[37px] text-[27px] font-semibold leading-[120%] capitalize">
                                Join our weekly digest
                            </h3>
                            <p className="subscribe-widget__subhead lg:text-[21px] text-[15px] font-normal leading-[160%] capitalize">Get exclusive promotions & updates straight to your inbox.</p>
                        </div>
                        <FormSub />
                    </div>
                </div>
            </section>
    )
}