export default function FormSub() {
    return (
            <form
                className={`flex lg:flex-row flex-col items-center justify-center rounded-[20px] lg:bg-white lg:gap-0 gap-[15px] lg:h-[60px] w-full`}>
                <input
                    className="px-5 py-4 rounded-2xl h-15 text-base 
font-normal leading-[140%] text-background bg-white focus:outline-none placeholder:text-[16px] w-full h-[46px]"
                    type="text" placeholder="Enter your email here" />
                <button className="button-2 trans md:px-[50px] lg:h-full lg:w-fit w-full h-[46px]">
                    <span>Subscribe</span>
                </button>
            </form>
    )
}