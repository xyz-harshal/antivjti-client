"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"
import Navbar from "./components/navbar"
import { Inter,Lato } from "next/font/google"
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})
const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})
export default function Home() {
  let router=useRouter()
  let { authCheck } = useAuth()
  useEffect(() => {
    authCheck()
  }, [])
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28 border-b border-gray-500 py-72">
        <div className={lato.className+" flex flex-col items-center lg:items-start"}>
          <h1 className="text-4xl font-bold">Welcome to Anti-VJTI</h1>
          <p className="text-xl mt-4">A platform to post anything anonymously</p>
          <p className="text-xl mt-2" >Only for the peps of VJTI</p>
        </div>
        <div className={inter.className+" flex flex-col justify-center items-center py-4 gap-6"}>
          <button className="bg-black text-white hover:bg-white my-borderCol hover:text-black px-4 py-2 rounded-md px-28 w-full text-xl" onClick={()=>router.push('/register')}>Register</button>
          <button className="bg-black text-white hover:bg-white my-borderCol hover:text-black px-4 py-2 rounded-md px-28 w-full text-xl" onClick={()=>router.push('/login')}>Login</button>
        </div>
      </div>
    </div>
  )
}