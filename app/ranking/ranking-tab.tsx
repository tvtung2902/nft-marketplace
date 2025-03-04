export default function RankingTab() {
    return (
        <div className="rankings__tabs flex">
            <div className="rankings__tab rankings__tab--active flex-1 h-[60px] flex items-center justify-center border-b-2 border-secondary text-content lg:text-[22px] text-[16px] font-semibold leading-[140%]">
                <h5 className="rankings__full-time hidden md:block">Today</h5>
                <h5 className="rankings__short-time md:hidden">1d</h5>
            </div>
            <div className="rankings__tab flex-1 h-[60px] flex items-center justify-center text-secondary lg:text-[22px] text-[16px] font-semibold leading-[140%]">
                <h5 className="rankings__full-time hidden md:block">This Week</h5>
                <h5 className="rankings__short-time md:hidden">7d</h5>
            </div>
            <div className="rankings__tab flex-1 h-[60px] flex items-center justify-center text-secondary lg:text-[22px] text-[16px] font-semibold leading-[140%]">
                <h5 className="rankings__full-time hidden md:block">This Month</h5>
                <h5 className="rankings__short-time md:hidden">1m</h5>
            </div>
            <div className="rankings__tab flex-1 h-[60px] flex items-center justify-center text-secondary lg:text-[22px] text-[16px] font-semibold leading-[140%]">
                <h5>All Time</h5>
            </div>
        </div>
    )
}