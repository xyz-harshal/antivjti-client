import Cookies from "js-cookie"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { credDataType,loginErrorType } from "@/types/types"
import axios from "axios"
import { env } from "@/app/env.mjs"
export let useLogin = () => {
    let router = useRouter()
    let [error, setError] = useState<loginErrorType | any>({
        email:null,
        password:null,
        vjti:null
    })
    let [isLoading, setIsLoading] = useState<boolean>(false)
    let headers = {
        'Content-Type': 'application/json',
        'Key': env.NEXT_PUBLIC_KEY,
    }
    let handleLoginData = async (loginData: credDataType) => {
        try {
            setIsLoading(true);
            if (loginData.email.endsWith('.vjti.ac.in')) {
                let res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`,loginData,{headers})
                setError({...res.data.error,vjti:false});
                if (res.data.error.email == true && res.data.error.password == true) {
                    Cookies.set("user", res.data.token);
                    router.push('/timeline');
                }
                else {
                    Cookies.set("user", '');
                }
            }
            else {
                setError({email:null,password:null,vjti:true})
            }
        }
        catch (e: any) {
            console.log(e.message);
        }
        finally {
            setIsLoading(false);
        }
    }
    return { handleLoginData, error,isLoading }
}