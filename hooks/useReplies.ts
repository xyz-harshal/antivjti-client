import { useState } from "react"
import Cookies from "js-cookie"
import axios from "axios"
import { replyDataType, specificEventDataType } from "@/types/types";
import { useEventsPost } from "./usePostEvent";

export let useReplies = (params: any) => {
  let { didLoad } = useEventsPost()
  let [specficEventData, setSpecificEventData] = useState<specificEventDataType>();
  let [voteData, setVoteData] = useState<any>([]);
  let [rvoteData, setRVoteData] = useState<any>([]);
  let [allReplyData, setAllReplyData] = useState<replyDataType[]>()
  let [isLoading, setIsLoading] = useState<boolean>()
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': Cookies?.get('user'),
    'Key': process.env.NEXT_PUBLIC_KEY,
  }
  let fetchRepliesData = async () => {
    try {
      setIsLoading(true)
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/getSpecificEvent`, {_id: params._id}, { headers })
        .then((res) => {
          setSpecificEventData(res.data.data);
          setVoteData(res.data.voteData);
        })
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/getReplies`, {_id: params._id},{headers})
        .then((res) => {
          setAllReplyData(res.data.response);
          setRVoteData(res.data.voteData);
        })
    } catch (e: any) {
      console.log(e.message)
    }
    finally {
      setIsLoading(false)
    }
  }
  return { specficEventData, allReplyData, isLoading, fetchRepliesData, didLoad, rvoteData, voteData }
}