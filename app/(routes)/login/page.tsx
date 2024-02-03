"use client"
import { useState,useEffect } from "react"
import { useLogin } from "@/hooks/useLogin"
import {credDataType} from "@/types/types"
import Navbar from "@/app/components/navbar"
import { BarLoader } from "react-spinners"
import { useRouter } from "next/navigation"
import { Ubuntu } from "next/font/google"
import { useAuth } from "@/hooks/useAuth"
const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function Login() {
  let { handleLoginData, error,isLoading } = useLogin()
  let {authCheck} = useAuth()
  let router = useRouter()
  let [loginData, setLoginData] = useState<credDataType>({
    email: "",
    password: "",
    otp: ["", "", "", "", "", ""],
  })
  let handleLogin = () => {
    handleLoginData(loginData)
  }
  useEffect(()=>{
    authCheck()
  },[])
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 items-center justify-center mt-56 ">
        <div className="flex flex-col items-center my-borderCol rounded-lg shadow-lg overflow-hidden p-8 gap-6">
          <p className="auth-header text-4xl ">Login</p>
          <div className="flex flex-col items-start gap-2">
            {error.vjti?<p>Input your VJTI email ID</p>:""}
            <p className={ubuntu.className + ' text-xl'} >Email</p>
            <p>{error?.email == false && error.password == false ? "email does not exist, register" : null}</p>
            <input
              type="email"
              className="bg-black outline-none my-borderCol rounded-md p-1"
              autoComplete="username"
              onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className={ubuntu.className + ' text-xl'}>Password</p>
            <p>{error?.email == true && error.password == false ? "incorrect password" : null}</p>
            <input
              type="password"
              className="bg-black outline-none my-borderCol rounded-md p-1"
              autoComplete="current-password"
              onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
            />
          </div>
          <div className="flex flex-row justify-center w-full">
            <button className=" flex flex-row justify-center w-full px-5 py-2 my-borderCol bg-white text-black rounded-lg hover:bg-black hover:text-white" onClick={handleLogin}>
              Submit
            </button>
          </div>
        </div>
        {isLoading?<BarLoader color="#36d7b7" width={310} />:null}
        <p className={ubuntu.className}>are you new?<span className="cursor-pointer auth-header text-xl text-violet-600" onClick={() => router.push('/register')} > Register</span> here!</p>
      </div>
    </>
  )
}