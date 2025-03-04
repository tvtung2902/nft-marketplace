import { Suspense } from "react";
import ListUserRowSkeleton from "../component/skeleton/user/list-user-row";
import RankingListUser from "./ranking-list-user";

export default function Temp({ tab }: { tab: string }) {
    return (
        <>
            <Suspense fallback={<ListUserRowSkeleton numberCard={10} />}>
                <RankingListUser tab={tab} />
            </Suspense>
        </>
    )
}