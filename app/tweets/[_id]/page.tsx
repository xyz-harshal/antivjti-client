"use client"
import { useState,useEffect } from "react"
import axios from "axios"
import ReadTweet from "@/app/components/readTweet";
import ReplyTweet from "./reply";
import {useSelector,useDispatch } from "react-redux";
import { AppDispatch,RootState } from "@/redux/store";

type incDataType = {
    _id: string,
    userID: string,
    post: string,
    username:string
  };
type replyDataType={
  _id: any,
    userId: string,
    postId: string
    reply: string,
    writterId: string,  
    writterName: string,
}
export default function Page({ params }: { params: { _id: string } }) {
  let selector = useSelector((state: RootState) => state.toggle2.value);
    let [incData,setIncData]=useState<incDataType>()
    let [replyData,setReplyData]=useState<replyDataType[]>()
    useEffect(()=>{
        let fetch=async()=>{
          let response1= await axios.post('http://localhost:4000/getSpecific',{_id:params._id})
          setIncData(response1.data)
          let response2=await axios.post('http://localhost:4000/getReplies',{_id:params._id})
          setReplyData(response2.data)
        }
        fetch()
    },[selector])
    return (
        <div className="mx-96">
            <ReadTweet username={incData?.username} post={incData?.post} _id={incData?._id} hier={false} />
            <ReplyTweet userId={incData?.userID} postId={incData?._id} />
          {replyData?.map((e)=><ReadTweet username={e.writterName} post={e.reply} _id={e._id} hier={false} />)}
        </div>
    )
  }