export interface User {
    id: number;
    cover_image: string;
    avatar: string;
    name: string;
    wallet_address: string;
    volume: string;
    total_sales: number;
    nfts_sold: number;
    bio: string;
    created: number;
    owned: number;
    collections: number;
    url_website: string,
    url_discord: string,
    url_youtube: string,
    url_twitter: string,
    url_instagram: string,
    follower: number[];
    following: number[];
}