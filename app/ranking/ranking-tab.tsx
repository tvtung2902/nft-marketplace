"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function RankingTab() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "today";

  const tabs = [
    { key: "today", label: "Today", shortLabel: "1d" },
    { key: "week", label: "This Week", shortLabel: "7d" },
    { key: "month", label: "This Month", shortLabel: "1m" },
    { key: "all", label: "All Time", shortLabel: "All Time" },
  ];

  const handleTabClick = (tabKey: string) => {
    const newUrl = `${pathname}?tab=${tabKey}`;
    router.replace(newUrl, { scroll: false });
  };

  return (
    <div className="rankings__tabs flex">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          className={`rankings__tab flex-1 h-[60px] flex items-center justify-center cursor-pointer
            lg:text-[22px] text-[16px] font-semibold leading-[140%]
            ${activeTab === tab.key ? "border-b-2 border-secondary text-content" : "text-secondary"}`}
          onClick={() => handleTabClick(tab.key)}
        >
          <h5 className="hidden md:block">{tab.label}</h5>
          <h5 className="md:hidden">{tab.shortLabel}</h5>
        </div>
      ))}
    </div>
  );
}
