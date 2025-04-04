import UserContent from "./user-content";
import ImageOfUser from "./user-img";
import { getItemCountByUserId, getUserById } from "@/app/_service/userService";
import TabNav from "@/app/_component/tab-nav";

export default async function LayoutArtistPage({
    children,
    params,
}: {
    readonly children: React.ReactNode;
    params: { id: string };
}) {
    const userId = Number(params.id);
    const userPromise = getUserById(userId);
    const itemCountPromise = getItemCountByUserId(userId)
    // parallel
    const [user, itemCount] = await Promise.all([userPromise, itemCountPromise])
    const listTabBar = [
        {
            link: `/artist/${userId}/created`,
            sublink: 'created',
            title: 'Created',
            number: itemCount.created
        },
        {
            link: `/artist/${userId}/owned`,
            sublink: 'owned',
            title: 'Owned',
            number: itemCount.owned
        },
        {
            link: `/artist/${userId}/collection`,
            sublink: 'collection',
            title: 'Collections',
            number: '60'
        }
    ]
    return (
        <>
            <ImageOfUser user={user} />
            <UserContent user={user} />
            <TabNav list={listTabBar} />
            <section className="py-[80px] bg-[#3B3B3B]">
                {children}
            </section>
            <div className="h-0.5 bg-background"></div>
        </>
    );
}
