import { User } from "./user";

export interface NFT {
    id: number; 
    image: string;
    title: string;
    minted_on: string;
    owner_id: number;
    creator_id: number;
    description: string;
    auction_end: string;
    price: string;
    highest_bid: string;
    original_url: string;
    etherscan_url: string;
    tags: string[];
    owner?: User;
    creator?: User;
}