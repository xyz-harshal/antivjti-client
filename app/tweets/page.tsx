"use client"
import PostTweets from "../components/postTweet"
import ReadTweet from "../components/readTweet"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import axios from "axios";
type incDataType = {
  _id: String,
  userID: String,
  post: String
};
export default function Tweets() {
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
  }, []);
  return (
    <div className="mainPg mx-96">
      <PostTweets />
      {incData?.map((e) => <ReadTweet userId={e.userID} post={e.post} _id={e._id} key={e._id} />)}
    </div>

  )
}