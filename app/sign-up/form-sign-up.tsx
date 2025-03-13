'use client'
import { useState } from "react";
import { message } from "antd";
import { useRouter } from "next/navigation";
import Input from "../_component/input";
import { createAccount } from "../actions";

export default function FormSignUp() {
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    
        const formData = new FormData(e.currentTarget);
    
        try {
            const newUserId = await createAccount(formData);
            if(newUserId !== -1){
                router.push('/');
                alert('Create account success!')
            }
            else{
                messageApi.open({
                    type: 'error',
                    content: "Create account failed!",
                });
            }
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: error + "",
            });
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <>
            {contextHolder}
            <form
                className="connect-wallet-and-cre-acc__wrap-content flex md:w-[325px] w-full flex-col gap-[30px]"
                onSubmit={handleSubmit}
            >
                <div className="connect-wallet-and-cre-acc__wrap-input flex flex-col gap-[15px]">
                    <Input icon="/assets/images/user-4@2x.svg" name="username" placeholder="Username" type="text" />
                    <Input icon="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/envelopesimple-4@2x.svg" name="email" placeholder="Email address" type="email" />
                    <Input icon="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/lockkey@2x.svg" name="password" placeholder="Password" type="password" />
                    <Input icon="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/lockkey@2x.svg" name="confirm-password" placeholder="Confirm password" type="password" />

                    <button
                        type="submit"
                        style={{ height: 46 }}
                        className="button trans"
                        disabled={loading}
                    >
                        <span>{loading ? "Creating..." : "Create account"}</span>
                    </button>
                </div>
            </form>
        </>
    );
}