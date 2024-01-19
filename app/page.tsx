"use client"
import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"
export default function Home() {
  let { authCheck } = useAuth()
  useEffect(() => {
    authCheck()
    console.log(true)
  }, [])
  return (
    <div className="home">
      <p>This is home route</p>
    </div>
  )
}