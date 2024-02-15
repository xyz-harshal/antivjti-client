import axios from "axios"
import { useState } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { credDataType, registerErrorType } from "@/types/types"
export let useRegister = () => {
    let router = useRouter();
    let [isVerify, setIsVerify] = useState<boolean>(false)
    let [isLoading, setIsLoading] = useState<boolean>(false)
    let [incOtp, setIncOtp] = useState<string>()
    let [error, setError] = useState<registerErrorType | any>({
        mail: null,
        vjti: null,
        otp: null
    })
    let headers = {
        'Content-Type': 'application/json',
        'Key': process.env.NEXT_PUBLIC_KEY,
    }
    let handleVerifyData = async (registeredData: credDataType) => {
        try {
            setIsLoading(true)
            if (registeredData.email.endsWith('.vjti.ac.in')) {
                let res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/verify`,registeredData,{headers})
                res.data.error ? setError({ mail: true, vjti: false, otp: null }) : setError({ mail: false, vjti: false, otp: null })
                if (res.data.error == false) {
                    setIncOtp(res.data.otp)
                    setIsVerify(true)
                }
            }
            else {
                setError({ vjti: true, mail: null, otp: null })
            }
        }
        catch (e: any) {
            console.log(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    let handleRegisterdData = async (userOtp: number | undefined, registeredData: credDataType) => {
        try {
            setIsLoading(true)
            let res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`,{...registeredData, incOtp, userOtp},{headers})
            if (res.data.error == false) {
                Cookies.set('user', res.data.token,{expires:7})
                router.push('/timeline')
            }
            else {
                setError({ mail: false, vjti: false, otp: true })
            }
        }
        catch (e: any) {
            console.log(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    return { handleVerifyData, handleRegisterdData, error, isLoading, isVerify, setIsVerify }
}