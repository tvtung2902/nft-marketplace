export interface Collection {
    id: number;
    name: string;
    userId: number;
    nft_count: number;
    cover_image: string;
    preview_images: string[];
    category: number;
}