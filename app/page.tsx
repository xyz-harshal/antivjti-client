"use client"
import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"
import LoaderSpinner from "./components/loader"
export default function Home() {
  let { authCheck,loading } = useAuth()
  useEffect(() => {
    authCheck()
  }, [])
  return (
    <div className="home">
      
      {loading?<LoaderSpinner />:<p>This is home route</p>}
    </div>
  )
}
