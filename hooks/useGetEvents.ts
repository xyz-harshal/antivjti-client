import Cookies from "js-cookie"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { tweetsMapDataType } from "@/types/types"
import { useEventsPost } from "./usePostEvent"
import { serverGet } from "@/server/server"
export let useGetEvents = () => {
    let router = useRouter()
    let {didLoad}=useEventsPost()
    let [incData, setIncData] = useState<tweetsMapDataType[]>()
    let [isLoading,setIsLoading]=useState<boolean>()
    let [voteData, setVoteData] = useState([]);
    let cookie=Cookies?.get('user')
    let handleGet = async () => {
        try {
            setIsLoading(true)
            if (cookie) {
                let res=await serverGet('getEvents')
                setIncData(res.data)
                setVoteData(res.voteData)
            }
            else router.push('/')
        }
        catch (e: any) {
            console.log(e.message)
        }
        finally{
            setIsLoading(false)
        }
    }
    return {handleGet,incData,isLoading,didLoad, voteData}
}