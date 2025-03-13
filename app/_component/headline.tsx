export default function HeadLine({head, subHead}: {head: string, subHead: string}) {
    return (
        <div className="flex flex-col gap-2.5">
            <h2 className="lg:text-[51px] md:text-[38px] text-[28px] font-semibold leading-[110%] capitalize">
                {head}
            </h2>
            <p className="lg:text-[22px] text-[16px] font-normal leading-[160%]">{subHead}</p>
        </div>
    )
}