import { NFT } from "../_interface/nft";
import { get } from "../_util/request";

const api:string = 'nfts'

export const getNftsByCreator = async (creatorId: number):Promise<NFT[]> => {
    const path:string = `${api}/?creator_id=${creatorId}`;
    const response:NFT[] = await get(path);
    return response;
}

export const getNftsByOwner = async (ownerId: number):Promise<NFT[]> => {
    const path:string = `${api}?owner_id=${ownerId}`;
    const response:NFT[] = await get(path);
    return response;
}