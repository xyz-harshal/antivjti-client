"use client"
import { useState } from "react"
import { useRegister } from "@/hooks/useRegister"
import { credDataType } from "@/types/types"

export default function Register() {
  let { handleRegisterData, error } = useRegister()
  let [registeredData, setRegisteredData] = useState<credDataType>({
    email: "",
    password: ""
  })
  let handleRegister = () => {
    handleRegisterData(registeredData)
  }
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center my-borderCol rounded-lg shadow-lg overflow-hidden p-8 gap-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Register</h2>
        <div className="flex flex-col items-start gap-2 ">
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
          <button className="px-4 py-1" onClick={handleRegister}>
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
