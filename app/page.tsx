"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"
import Navbar from "./components/navbar"
import { data } from "./data"
import { Inter, Lato,Mukta } from "next/font/google"
import Image from 'next/image'
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
const mukta=Mukta({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
})
export default function Home() {
  let router = useRouter()
  let { authCheck } = useAuth()
  useEffect(() => {
    authCheck()
  }, [])
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row justify-center border-b border-gray-500 py-48 md:py-72">
        <div className="brag flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-28 my-borderCol mx-4 md:mx-0 p-4 md:p-12 rounded-xl">
          <div className={lato.className + " flex flex-col items-center lg:items-start"}>
            <p className="text-3xl lg:text-4xl font-bold">Welcome to Anti-VJTI</p>
            <p className="text-xl lg:text-xl mt-4">A platform to post anonymously</p>
            <p className="text-xl lg:text-xl mt-4">Only for the peeps of VJTI</p>
          </div>
          <div className={inter.className + " flex flex-col justify-center items-center py-4 gap-6"}>
            <button className={mukta.className+" home-btn my-borderCol py-2 rounded-md px-28 w-full text-xl"} onClick={() => router.push('/register')}>Register</button>
            <button className={mukta.className+" home-btn my-borderCol py-2 rounded-md px-28 w-full text-xl"} onClick={() => router.push('/login')}>Login</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16 text-white gap-16 border-b border-gray-500 mx-4">
        <p className={lato.className + " text-4xl font-bold"}>I mean i wont brag but, It is what it is</p>
        {data.map((i, n) => {
          return (
            <div key={n} className="flex flex-col justify-center items-center gap-8 brag">
              <div className="inline-flex flex-row justify-center items-center my-borderCol p-4 rounded-lg gap-8 flex-wrap">
                <Image src={i.img} alt="logo" width={400} height={400} />
                <div className="flex flex-col justify-start items-start gap-4 md:gap-2 text-lg px-2">
                  <p>{i.p1}</p>
                  <p>{i.p2}</p>
                  <p>{i.p3}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex flex-row justify-center py-4 text-gray-400">
        <p>© 2024 Chefs</p>
      </div>
    </div>
  )
}