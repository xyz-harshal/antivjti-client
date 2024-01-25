import axios from "axios"
import { useState } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { credDataType } from "@/types/types"
export let useRegister = () => {
    let router = useRouter();
    let [error, setError] = useState<boolean>();
    let handleRegisterData = async (registeredData:credDataType) => {
        try {
            if (registeredData.email.endsWith('.vjti.ac.in')) {
                let res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`, registeredData);
                res.data.error ? setError(true) : setError(false)
                if (res.data.error == false) {
                    Cookies.set('user', res.data.token)
                    router.push('/timeline')
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
    return {handleRegisterData,error}
}