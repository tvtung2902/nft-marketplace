export default function FormSub() {
    return (
        <form
            className={`flex md:flex-row flex-col items-center justify-center rounded-[20px] md:bg-white md:gap-0 gap-[15px] md:h-[60px] w-full md:w-[420px]`}>
            <input
                className="px-5 py-4 rounded-2xl h-15 text-base 
font-normal leading-[140%] text-background bg-white focus:outline-none placeholder:text-[16px] w-full h-[46px] md:h-full"
                type="text" placeholder="Enter your email here" />
            <button className="button button--trans md:px-[50px] w-full md:w-fit h-[46px] md:h-full">
                <span>Subscribe</span>
            </button>
        </form>
    )
}