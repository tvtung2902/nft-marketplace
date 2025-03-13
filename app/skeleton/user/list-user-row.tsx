import UserRowSkeleton from "./user-row";

export default function ListUserRowSkeleton({numberCard, }: {numberCard:number, }){
    return(
        <>
            {[...Array(numberCard)].map((_, index) => (
                <UserRowSkeleton key={index}/>
            ))}
        </>
    )
}