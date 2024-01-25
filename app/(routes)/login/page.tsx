"use client"
import { useState } from "react"
import { useLogin } from "@/hooks/useLogin"
import { credDataType } from "@/types/types"
export default function Login() {
  let {handleLoginData,error}=useLogin()
  let [loginData, setLoginData] = useState<credDataType>({
    email: "",
    password: ""
  })
  let handleLogin=()=>{
    handleLoginData(loginData)
  }
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center my-borderCol rounded-lg shadow-lg overflow-hidden p-8 gap-6">
        <p> Login page</p>
        <div className="flex flex-col items-start gap-2">
          <p>Email</p>
          <p>{error?.email == false && error.password == false ? "email does not exist, register" : null}</p>
          <input
           type="email" 
           className="bg-black outline-none my-borderCol rounded-md p-1" 
           autoComplete="username" 
           onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <p>Password</p>
          <p>{error?.email == true && error.password == false ? "incorrect password" :null}</p>
          <input
           type="password" 
           className="bg-black outline-none my-borderCol rounded-md p-1" 
           autoComplete="current-password" 
           onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
          />
        </div>
        <div className="flex flex-row justify-end w-full">
          <button className="px-4 py-1" onClick={handleLogin}>
            <PlayIcon className="text-gray-900 dark:text-gray-100" />
           </button>
        </div>
      </div>
    </div>
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
