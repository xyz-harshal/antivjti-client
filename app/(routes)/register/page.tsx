"use client"
import { useState,useEffect } from "react"
import { useRegister } from "@/hooks/useRegister"
import { credDataType } from "@/types/types"
import { useAuth } from "@/hooks/useAuth"
export default function Register() {
  let {authCheck}=useAuth()
  let { handleRegisterData, error } = useRegister()
  let [registeredData, setRegisteredData] = useState<credDataType>({
    email: "",
    password: ""
  })
  let handleRegister = () => {
    handleRegisterData(registeredData)
  }
  useEffect(() => {
    authCheck();
  }, []);
  return (
    <div className="register flex flex-row justify-center">
      <div className="flex flex-col items-center my-borderCol p-8 gap-6">
        <p>Register here</p>
        <div className="flex flex-col items-start gap-2">
          <p>Email</p>
          <p>{error ? "username already exist" : null}</p>
          <input
           type="email" 
           className="bg-black outline-none my-borderCol rounded-md p-1" 
           autoComplete="username" 
           onChange={(e) => { setRegisteredData({ ...registeredData, email: e.target.value })}}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <p>Password</p>
          <input
           type="password" 
           className="bg-black outline-none my-borderCol rounded-md p-1" 
           autoComplete="current-password" 
           onChange={(e) => { setRegisteredData({ ...registeredData, password: e.target.value })}} 
          />
        </div>
        <div className="flex flex-row justify-end w-full">
          <button className="my-borderCol px-4 rounded-lg py-1" onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  )
}