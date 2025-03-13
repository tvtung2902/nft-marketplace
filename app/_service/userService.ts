import { User } from "../_interface/user";
import { get } from "../_util/request";

const api:string = 'users'
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


export const getUserById = async (id: number):Promise<User> => {
    const path:string = `${api}?id=${id}`;
    const response:User[] = await get(path);
    return response[0];
}

// hard code
export const getItemCountByUserId= async (id: number):Promise<ItemCount> => {
    return {
        created: 300,
        owned: 200,
        collection: 10
    }
}

// fake data
export const getUsersRanking = async (tab:string):Promise<User[]> =>{
    await delay(2000)
    const path:string = `${api}?_sort=nfts_sold&_order=asc&tab=${tab}&_limit=12`;
    const response:User[] = await get(path);
    return response;
}