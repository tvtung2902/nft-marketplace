'use server'

import { UserSignUp } from "./_interface/user-sign-up";
import { addUser, isExistUser } from "./_service/userService";

 
export async function createAccount(formData: FormData) : Promise<number> {
    if(formData.get("password") !== formData.get("confirm-password")) return -1
    if(await isExistUser(formData.get('username') as string)) return -1
    const data:UserSignUp = {
        username: formData.get("username") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };
    const newUserId = await addUser(data)
    return newUserId
}
