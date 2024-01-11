"use client"
import PostTweets from "../components/postTweet"
import mongoose from "mongoose";
import ReadTweet from "../components/readTweet"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import axios from "axios";
import {useSelector,useDispatch } from "react-redux";
import { AppDispatch,RootState } from "@/redux/store";
import { counter } from "@/redux/features/reloadToggle";
type incDataType = {
  _id: string,
  userID: string,
  post: string,
  username:string,
  upvoteIds:[mongoose.Schema.Types.ObjectId],
  downvoteIds:[mongoose.Schema.Types.ObjectId]
};
export default function Tweets() {
  let selector = useSelector((state: RootState) => state.toggle.value);
  let router=useRouter();
  let [incData, setIncData] = useState<incDataType[]>()
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': Cookies?.get('user'),
  }
  useEffect(() => {
    let handleGet = async () => {
      try {
        let mainRes = await axios.get('http://localhost:4000/mainAuth', { headers })
        if (mainRes.data.status==true) {
          let res = (await axios.get("http://localhost:4000/get"));
          setIncData(res.data)
        }
        if(mainRes.data.status==false){
          router.push('/');
        }
      }
      catch (e: any) {
        console.log(e.message)
      }
    }
    handleGet();
  }, [selector]);
  return (
    <div className="mainPg mx-96">
      <PostTweets />
      {incData?.map((e) => <ReadTweet upvoteIds={e.upvoteIds} downvoteIds={e.downvoteIds} username={e.username} post={e.post} _id={e._id} key={e._id} hier={true} />)}
    </div>

  )
}