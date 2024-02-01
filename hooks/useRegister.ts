import axios from "axios"
import { useState } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { credDataType, registerErrorType } from "@/types/types"
export let useRegister = () => {
    let router = useRouter();
    let [isLoading, setIsLoading] = useState<boolean>(false)
    let [error, setError] = useState<registerErrorType | any>({
        error:null,
        vjti:null
    });
    let handleRegisterData = async (registeredData:credDataType) => {
        try {
            setIsLoading(true);
            if (registeredData.email.endsWith('.vjti.ac.in')) {
                let res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`, registeredData)
                res.data.error ? setError({error:true,vjti:false}) : setError({error:false,vjti:false})
                if (res.data.error == false) {
                    Cookies.set('user', res.data.token)
                    router.push('/timeline')
                }
            }
            else {
                setError({vjti:true,error:null})
            }
        }
        catch (e: any) {
            console.log(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    return {handleRegisterData,error,isLoading}
}