import { User } from "@/app/_interface/user";
import Image from "next/image";
export default function ImageOfUser({user, }: {user: User}) {
    return (
        <>
            <Image height={320} width={1280} className="lg:h-[320px] md:h-[280px] sm:h-[250px] w-full" src={user.cover_image} alt="background Image" />

            <div className="lg:max-w-[1050px] md:max-w-[690px] max-w-[315px] mx-auto flex md:justify-normal justify-center">
                <Image width={120} height={120} className="w-[120px] h-[120px] object-cover border-background border-[2px] rounded-[20px] mt-[-70px]"
                    src={user.avatar} alt="avatar" />
            </div>
        </>
    )
}