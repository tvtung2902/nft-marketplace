import { User } from "../_interface/user";
import { get } from "../_util/request";

const api:string = 'users'

export const getUserById = async (id: number):Promise<User[]> => {
    const path:string = `${api}?id=${id}`;
    const response:User[] = await get(path);
    return response;
}