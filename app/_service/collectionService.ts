import { Collection } from "../_interface/collection";
import { get } from "../_util/request";

const api:string = 'collections'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


export const getCollectionByCreator = async (userId: number):Promise<Collection[]> => {
    await delay(500)
    const path:string = `${api}?userId=${userId}`;
    const response:Collection[] = await get(path);
    return response;
}

export const getCollectionByName = async (name?: string):Promise<Collection[]> => {
    await delay(500)
    const path:string = name ? `${api}?name=${name}` : api;
    const response:Collection[] = await get(path);
    return response;
}

// hard code
export const getAllCollectionsCount = async () => {
    return 100
}