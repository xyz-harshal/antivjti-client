import Cookies from "js-cookie"
import { useState } from "react"
import { credDataType,loginErrorType } from "@/types/types"
import {login} from "@/server/login"
import { useRouter } from "next/navigation"
export let useLogin = () => {
    let router = useRouter();
    let [error, setError] = useState<loginErrorType | any>({
        email:null,
        password:null,
        vjti:null
    })
    let [isLoading, setIsLoading] = useState<boolean>(false)
    let handleLoginData = async (loginData: credDataType) => {
        try {
            setIsLoading(true);
            if (loginData.email.endsWith('.vjti.ac.in')) {
                let res = await login(loginData);
                setError({...res.error,vjti:false});
                if (res.error.email == true && res.error.password == true) {
                    Cookies.set("user", res.token,{expires:7});
                    router.push('/timeline')
                }
                else  Cookies.set("user", '');
            }
            else setError({email:null,password:null,vjti:true})  
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