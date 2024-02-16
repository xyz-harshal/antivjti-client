"use client";
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"
import { BarLoader } from "react-spinners"
import Navbar from "@/app/components/navbar"
import { Ubuntu,Mukta } from "next/font/google"
import { useState } from "react";
import { useRegister } from "@/hooks/useRegister";
import { credDataType } from "@/types/types";
const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})
const mukta=Mukta({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
})
export default function Register() {
  let { handleVerifyData,handleRegisterdData, error, isLoading,isVerify } = useRegister()
  let [registeredData, setRegisteredData] = useState<credDataType>({
    email: "",
    password: "",
  })
  let [otp, setOtp] = useState<number>()
  let router = useRouter()
  let { authCheck } = useAuth()
  useEffect(() => {
    authCheck()
  }, [])
  let handleVerify = () => {
    handleVerifyData(registeredData)
  }
  let handleRegister = () => {
    handleRegisterdData(otp,registeredData)
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 items-center justify-center mt-56">
        <div className="flex flex-col items-center my-borderCol rounded-lg shadow-lg overflow-hidden p-6 gap-6">
          <h2 className="auth-header text-4xl">Register</h2>
          <div className={isVerify?"hidden":"flex flex-col items-start gap-2 "}>
            <p className={ubuntu.className + " text-xl"}>Email</p>
            {error.mail ? <p className={ubuntu.className} >email already exist</p> : null}
            {error.vjti ? <p className={ubuntu.className} >vjti email only</p> : null}
            <input
              type="email"
              className="bg-black outline-none my-borderCol rounded-md p-1"
              autoComplete="username"
              onChange={(e) => {
                setRegisteredData({ ...registeredData, email: e.target.value });
              }}
            />
          </div>
          <div className={isVerify?"hidden":"flex flex-col items-start gap-2"}>
            <p className={ubuntu.className + " text-xl"}>Password</p>
            <input
              type="password"
              className="bg-black outline-none my-borderCol rounded-md p-1"
              autoComplete="current-password"
              onChange={(e) => {
                setRegisteredData({ ...registeredData, password: e.target.value })
              }}
            />
          </div>
          <div className={isVerify?"flex flex-col items-start gap-2":"hidden"}>
            <p className={ubuntu.className + " text-xl"}>OTP</p>
            {error.otp ? <p className={ubuntu.className} >Invalid OTP</p> : null}
            <input
              type="text"
              placeholder="* * * * * *"
              className="bg-black outline-none my-borderCol rounded-md p-1"
              maxLength={6}
              onChange={(e) => { setOtp(Number(e.target.value)) }}
            />
          </div>
          <div className="flex flex-row justify-center w-full">
            <button className={mukta.className+" px-5 py-2 my-borderCol rounded-lg flex flex-row justify-center w-full home-btn text-xl"} onClick={isVerify?handleRegister:handleVerify}>
              {isVerify?"Register":"Verify"}
            </button>
          </div>
        </div>
        {isLoading ? <BarLoader color="#36d7b7" width={310} /> : null}
        <p className={ubuntu.className}>already registered?<span className="cursor-pointer auth-header text-xl text-violet-600" onClick={() => router.push("/login")} >{" "}Login</span>{" "}here!</p>
      </div>
    </>
  );
}