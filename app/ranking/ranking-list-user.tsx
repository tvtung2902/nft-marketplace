import { getUsersRanking } from "../_service/userService";
import RankingUser from "./ranking-user";

export default async function RankingListUser({ tab }: { tab: string }) {
    const users = await getUsersRanking(tab);
    return (
        <>
            {users.map((user, index) => (
                <RankingUser key={user.id} index={index} user={user} />
            ))}
        </>
    )
}