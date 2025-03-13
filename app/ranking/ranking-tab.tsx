"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RankingTab() {
  const pathName = usePathname()
  const isActive = (path: string) => pathName.includes(path) ? 'text-content border-b-[2px] border-b-secondary' : 'text-secondary'

  const tabs = [
    { key: "today", label: "Today", shortLabel: "1d" },
    { key: "this-week", label: "This Week", shortLabel: "7d" },
    { key: "this-month", label: "This Month", shortLabel: "1m" },
    { key: "all-time", label: "All Time", shortLabel: "All Time" },
  ];

  return (
    <div className="rankings__tabs flex">
      {tabs.map((tab) => (
        <Link
          href={`/ranking/${tab.key}`}
          key={tab.key}
          className={`${isActive(tab.key)} rankings__tab flex-1 h-[60px] flex items-center justify-center cursor-pointer
            lg:text-[22px] text-[16px] font-semibold leading-[140%]`}
        >
          <h5 className="hidden md:block">{tab.label}</h5>
          <h5 className="md:hidden">{tab.shortLabel}</h5>
        </Link>
      ))}
    </div>
  );
}
