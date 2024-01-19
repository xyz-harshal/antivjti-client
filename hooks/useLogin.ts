import Cookies from "js-cookie"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { credDataType,loginErrorType } from "@/types/types"
import axios from "axios"

export let useLogin = () => {
    let router = useRouter()
    let [error, setError] = useState<loginErrorType>()
    let handleLoginData = async (loginData: credDataType) => {
        try {
            if (loginData.email.endsWith('.vjti.ac.in')) {
                let res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, loginData)
                setError(res.data.error);
                if (res.data.error.email == true && res.data.error.password == true) {
                    Cookies.set("user", res.data.token);
                    router.push('/tweets');
                }
                else {
                    Cookies.set("user", '');
                }
            }
            else {
                console.log(false);
            }
        }
        catch (e: any) {
            console.log(e.message);
        }
    }
    return { handleLoginData, error }
}