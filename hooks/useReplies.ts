import { useState } from "react"
import { replyDataType, specificEventDataType } from "@/types/types";
import { useEventsPost } from "./usePostEvent";
import {server} from "@/server/server"

export let useReplies = (params: any) => {
  let { didLoad } = useEventsPost()
  let [specficEventData, setSpecificEventData] = useState<specificEventDataType>();
  let [voteData, setVoteData] = useState<any>([]);
  let [rvoteData, setRVoteData] = useState<any>([]);
  let [allReplyData, setAllReplyData] = useState<replyDataType[]>()
  let [isLoading, setIsLoading] = useState<boolean>()
  let _id = { _id: params._id }
  let fetchRepliesData = async () => {
    try {
      setIsLoading(true)
      let res1=await server(_id,'getSpecificEvent')
      setSpecificEventData(res1.data)
      setVoteData(res1.voteData)

      let res2=await server(_id,'getReplies')
      setAllReplyData(res2.response)
      setRVoteData(res2.voteData)
    }
    catch (e: any) {
      console.log(e.message)
    }
    finally {
      setIsLoading(false)
    }
  }
  return { specficEventData, allReplyData, isLoading, fetchRepliesData, didLoad, rvoteData, voteData }
}