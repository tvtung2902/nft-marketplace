import { User } from "../_interface/user";
import { UserSignUp } from "../_interface/user-sign-up";
import { get, post } from "../_util/request";

const api:string = 'users'
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


export const getUserById = async (id: number):Promise<User> => {
    const path:string = `${api}?id=${id}`;
    const response:User[] = await get(path);
    return response[0];
}

export const isExistUser = async (username: string): Promise<boolean> => {
    const path: string = `${api}?username=${username}`;
    const response: User[] = await get(path);
    return response.length > 0;
};


export const getTopArtist = async ():Promise<User[]> => {
    const path:string = `${api}?_limit=12`;
    const response:User[] = await get(path);
    return response;
}

// hard code
export const getItemCountByUserId= async (id: number):Promise<ItemCount> => {
    return {
        created: 300,
        owned: 200,
        collection: 10
    }
}

export const addUser = async (userSignUp: UserSignUp):Promise<number> =>{
    await delay(1000)
    try {
       const response:User = await post(api, userSignUp)
        return response.id
    } catch (error) {
        console.log('error', error)
        return -1
    } 
}

// fake data
export const getUsersRanking = async (tab:string):Promise<User[]> =>{
    await delay(2000)
    const path:string = `${api}?_sort=nfts_sold&_order=asc&tab=${tab}&_limit=12`;
    const response:User[] = await get(path);
    return response;
}

//
