import { NFT } from "../_interface/nft";
import { get } from "../_util/request";

const api:string = 'nfts'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getNftsByCreator = async (creatorId: number):Promise<NFT[]> => {
    await delay(500)
    const path:string = `${api}?creator_id=${creatorId}`;
    console.log(path)
    const response:NFT[] = await get(path);
    return response;
}

export const getNftsByOwner = async (ownerId: number):Promise<NFT[]> => {
    await delay(500)
    const path:string = `${api}?owner_id=${ownerId}`;
    const response:NFT[] = await get(path);
    return response;
}

export const getAllNftByTitle = async (title?: string):Promise<NFT[]> => {
    await delay(500)
    const path:string = title ? `${api}?title=${title}` : api;
    const response:NFT[] = await get(path);
    return response;
}

export const getNftsById = async (id: number):Promise<NFT> => {
    await delay(1000)
    const path:string = `${api}/${id}`;
    const response:NFT = await get(path);
    return response;
}

// limit
export const getNftsLimit3 = async ():Promise<NFT[]> => {
    await delay(1000)
    const path:string = `${api}?_limit=3`;  
    const response:NFT[] = await get(path);
    return response;
}

// hard code
export const getAllNftsCount = async () => {
    await delay(500)
    return 900
}