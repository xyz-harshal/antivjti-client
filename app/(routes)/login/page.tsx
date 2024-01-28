"use client"
import { useState,useEffect } from "react"
import { useLogin } from "@/hooks/useLogin"
import { credDataType } from "@/types/types"
import Navbar from "@/app/components/navbar"
import { useRouter } from "next/navigation"
import { Ubuntu } from "next/font/google"
const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function Login() {
  let {handleLoginData,error}=useLogin()
  let router = useRouter()
  let [loginData, setLoginData] = useState<credDataType>({
    email: "",
    password: ""
  })
  let handleLogin=()=>{
    handleLoginData(loginData)
  }
  return (
    <>
    <Navbar />
    <div className="flex flex-col gap-2 items-center justify-center mt-56 ">
      <div className="flex flex-col items-center my-borderCol rounded-lg shadow-lg overflow-hidden p-8 gap-6">
        <p className="auth-header text-5xl text-violet-600">Login</p>
        <div className="flex flex-col items-start gap-2">
          <p className={ubuntu.className+' text-xl'} >Email</p>
          <p>{error?.email == false && error.password == false ? "email does not exist, register" : null}</p>
          <input
           type="email" 
           className="bg-black outline-none my-borderCol rounded-md p-1" 
           autoComplete="username" 
           onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className={ubuntu.className+' text-xl'}>Password</p>
          <p>{error?.email == true && error.password == false ? "incorrect password" :null}</p>
          <input
           type="password" 
           className="bg-black outline-none my-borderCol rounded-md p-1" 
           autoComplete="current-password" 
           onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
          />
        </div>
        <div className="flex flex-row justify-end w-full">
          <button className="px-5 py-2 my-borderCol rounded-lg" onClick={handleLogin}>
            <PlayIcon color="#9C50B6" />
           </button>
        </div>
      </div>
      <p className={ubuntu.className}>are you new?<span className="cursor-pointer auth-header text-xl text-violet-600" onClick={() => router.push('/register')} > Register</span> here!</p>
    </div>
    </>
  )
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}
