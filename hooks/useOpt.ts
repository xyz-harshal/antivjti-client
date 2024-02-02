import axios from 'axios'
import { useRegister } from './useRegister'
import { useState, useRef } from 'react'
import { credDataType } from "@/types/types"
export function useOtp() {
    let { handleRegisterData, error, isLoading } = useRegister()
    let [sendMail, setSendMail] = useState<boolean>(false)
    let [recivedOTP, setRecivedOtp] = useState<number>(0)
    let [registeredData, setRegisteredData] = useState<credDataType>({
        email: "",
        password: "",
        otp: ['', '', '', '', '', '']
    })
    const otpInputsRef = useRef<Array<HTMLInputElement | null>>([])
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
        const value = e.target.value
        const newOTP: string[] = [...registeredData.otp]
        newOTP[index] = value.substring(value.length - 1)
        setRegisteredData({ email: registeredData.email, password: registeredData.password, otp: newOTP })
        if (index < otpInputsRef.current.length - 1 && value.length === 1) {
            otpInputsRef.current[index + 1]?.focus()
        }
    }
    let handleRegister = () => {
        if (sendMail) {
            setSendMail(!sendMail);
            let numOTP: number = 0;
            registeredData.otp.forEach((n, index) => {
                numOTP += (10 ** (5 - index)) * Number(n)
            })
            if (recivedOTP === numOTP) {
                handleRegisterData(registeredData);
            } else {
                setRecivedOtp(-1);
            }
        } else {
            axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/otpGenerate`, registeredData).then((res) => {
                let response = res.data;
                if (response.status === 200) {
                    setRecivedOtp(response.otp)
                }
            })
            setSendMail(!sendMail)
        }
    }
    return { handleOnChange, handleRegister, sendMail, error, isLoading, otpInputsRef,registeredData,setRegisteredData,recivedOTP }
}