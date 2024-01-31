"use client"
import { useState } from "react"
import { useRegister } from "@/hooks/useRegister"
import { credDataType } from "@/types/types"
import { useRouter } from "next/navigation"
import { BarLoader } from "react-spinners"
import Navbar from "@/app/components/navbar"
import { Ubuntu } from "next/font/google"
const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function Register() {
  let { handleRegisterData, error,isLoading} = useRegister()
  let [registeredData, setRegisteredData] = useState<credDataType>({
    email: "",
    password: ""
  })
  let handleRegister = () => {
    handleRegisterData(registeredData)
  }
  let router = useRouter()
  return (
    <>
    <Navbar />
    <div className="flex flex-col gap-2 items-center justify-center mt-56">
      <div className="flex flex-col items-center my-borderCol rounded-lg shadow-lg overflow-hidden p-8 gap-6">
        <h2 className="auth-header text-5xl text-violet-600">Register</h2>
        <div className="flex flex-col items-start gap-2 ">
          {error.vjti?<p>Enter your valid VJTI email ID</p>:''}
          <p className={ubuntu.className+' text-xl'}>Email</p>
          <p className={ubuntu.className}>{error.error ? "email already exist" : null}</p>
          <input
            type="email"
            className="bg-black outline-none my-borderCol rounded-md p-1"
            autoComplete="username"
            onChange={(e) => { setRegisteredData({ ...registeredData, email: e.target.value }) }}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className={ubuntu.className+' text-xl'}>Password</p>
          <input
            type="password"
            className="bg-black outline-none my-borderCol rounded-md p-1"
            autoComplete="current-password"
            onChange={(e) => { setRegisteredData({ ...registeredData, password: e.target.value }) }}
          />
        </div>
        <div className="flex flex-row justify-end w-full">
          <button className="px-5 py-2 my-borderCol rounded-lg" onClick={handleRegister} >
            <PlayIcon color="#9C50B6" />
          </button>
        </div>
      </div>
      {isLoading?<BarLoader color="#36d7b7" width={310} />:null}
      <p className={ubuntu.className}>already registered?<span className="cursor-pointer auth-header text-xl text-violet-600" onClick={() => router.push('/login')} > Login</span> here!</p>
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
