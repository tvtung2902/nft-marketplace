import { Collection } from "../_interface/collection";
import { get } from "../_util/request";

const api:string = 'collections'

export const getCollectionByCreator = async (userId: number):Promise<Collection[]> => {
    const path:string = `${api}/?userId=${userId}`;
    const response:Collection[] = await get(path);
    return response;
}