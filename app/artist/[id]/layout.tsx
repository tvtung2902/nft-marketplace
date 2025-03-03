import NFT_List from "@/app/component/nft/nft-list";
import Image from "next/image";
import Link from "next/link";
import UserContent from "./user-content";
import ImageOfUser from "./user-img";
import { getUserById } from "@/app/_service/userService";
import UserTabBar from "./user-tab-bar";

export default async function LayoutArtistPage({
    children,
    params,
}: {
    readonly children: React.ReactNode;
    params: { id: string };
}) {
    const userId = Number(params.id);
    const user = await getUserById(userId);
    console.log("user", user);
    return (
        <>  
            <ImageOfUser user={user[0]}/>
            <UserContent user={user[0]}/>
            <UserTabBar userId={userId}/>
            {children}
        </>
    );
}
