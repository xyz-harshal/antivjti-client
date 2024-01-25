import { useState } from "react"
import axios from "axios"
import { replyDataType, specificEventDataType } from "@/types/types";
import { useEventsPost } from "./usePostEvent";
export let useReplies = (params: any) => {
  let {didLoad}=useEventsPost()
  let [specficEventData, setSpecificEventData] = useState<specificEventDataType>()
  let [allReplyData, setAllReplyData] = useState<replyDataType[]>()
  let [isLoading, setIsLoading] = useState<boolean>()
  let fetchRepliesData = async () => {
    try {
      setIsLoading(true)
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/getSpecificTweet`, {
        _id: params._id,
      }).then((res) => {
        setSpecificEventData(res.data)
      })
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/getReplies`, {
        _id: params._id,
      }).then((res) => setAllReplyData(res.data))
    } catch (e: any) {
      console.log(e.message)
    }
    finally {
      setIsLoading(false)
    }
  }
  return { specficEventData, allReplyData, isLoading, fetchRepliesData,didLoad }
}