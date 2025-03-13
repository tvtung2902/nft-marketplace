export default function EmptyData({text = 'Empty Data!'}: {text?: string}){
    return(
        <div className="text-center lg:text-[38px] text-[22px] font-mono font-semibold leading-[140%] italic text-secondary">{text}</div>
    )
}