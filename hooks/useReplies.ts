import { useState } from "react"
import axios from "axios"
import { replyDataType, specificEventDataType } from "@/types/types";
export let useReplies=(params:any)=>{
    let [specficEventData, setSpecificEventData] = useState<specificEventDataType>()
    let [allReplyData, setAllReplyData] = useState<replyDataType[]>()
    let [vis,setVis]=useState<boolean>()
    let fetchRepliesData = async () => {
        try {
          setVis(false)
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
        finally{
          setVis(true)
        }
      }
      return {specficEventData,allReplyData,vis,fetchRepliesData}
}