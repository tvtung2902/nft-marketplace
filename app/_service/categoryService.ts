import { Category } from "../_interface/category";
import { get } from "../_util/request";

const api:string = 'categories'

export const getCategory = async ():Promise<Category[]> => {
    const path:string = `${api}`;
    const response:Category[] = await get(path);
    return response;
}
