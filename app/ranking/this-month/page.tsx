import { Suspense } from "react";
import RankingListUser from "../ranking-list-user";
import ListUserRowSkeleton from "@/app/_component/skeleton/user/list-user-row";

export default function ThisMonthTab() {
    return (
        <Suspense fallback={<ListUserRowSkeleton numberCard={12}/>}>
            <RankingListUser tab='week' />
        </Suspense>
    )
}