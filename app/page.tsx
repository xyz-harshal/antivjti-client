"use client"
import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"
export default function Home() {
  let { authCheck } = useAuth()
  useEffect(() => {
    authCheck()
  }, [])
  return (
    <div className="home">
      <p>This is home route</p>
    </div>
  )
}
