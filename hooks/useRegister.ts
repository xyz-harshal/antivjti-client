import { useState } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { credDataType, registerErrorType } from "@/types/types"
import {verify,register} from "@/server/register"
export let useRegister = () => {
    let router = useRouter();
    let [isVerify, setIsVerify] = useState<boolean>(false)
    let [isLoading, setIsLoading] = useState<boolean>(false)
    let [hashed, setHashed] = useState<any>()
    let [error, setError] = useState<registerErrorType | any>({
        mail: null,
        vjti: null,
        otp: null
    })
    let handleVerifyData = async (registeredData: credDataType) => {
        try {
            setIsLoading(true)
            if (registeredData.email.endsWith('.vjti.ac.in')) {
                let res = await verify(registeredData)
                res.error ? setError({ mail: true, vjti: false, otp: null }) : setError({ mail: false, vjti: false, otp: null })
                if (res.error == false) {
                    setHashed(res.combinedHash)
                    setIsVerify(true)
                }
            }
            else setError({ vjti: true, mail: null, otp: null }) 
        }
        catch (e: any) {
            console.log(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    let handleRegisteredData = async (userOtp: number | undefined, registeredData: credDataType) => {
        try {
            setIsLoading(true)
            let regData={...registeredData,hashed,userOtp}
            let res = await register(regData)
            if (res.error == false) {
                Cookies.set('user', res.token,{expires:7})
                router.push('/timeline')
            }
            else  setError({ mail: false, vjti: false, otp: true })
        }
        catch (e: any) {
            console.log(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    return { handleVerifyData, handleRegisteredData, error, isLoading, isVerify, setIsVerify }
}