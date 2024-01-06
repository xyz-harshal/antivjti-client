"use client"
import PostTweets from "../components/postTweet"
import ReadTweet from "../components/readTweet"
import {useState,useEffect} from "react"
import axios from "axios";
type incDataType={
  _id:String,
  userID:String,
  post:String
};
export default function Tweets(){
    let [incData,setIncData]=useState<incDataType[]>()
    useEffect(()=>{
      let handleGet=async()=>{
        try{
          let res=(await axios.get("http://localhost:4000/get"));
          setIncData(res.data);
        }
        catch(e:any){
          console.log(e.message)
        }
      }
      handleGet();
    },[]);
    return (
      <div className="mainPg mx-96">
        <PostTweets />
        {incData?.map((e)=><ReadTweet userId={e.userID} post={e.post} _id={e._id} key={e._id}/>)}
      </div>
  
    )
}