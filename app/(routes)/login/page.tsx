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
    <div className="login flex flex-row justify-center">
      <div className="flex flex-col items-center my-borderCol p-8 gap-6">
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
          <button className="my-borderCol px-4 rounded-lg py-1" onClick={handleLogin}>login</button>
        </div>
      </div>
    </div>
  )
}