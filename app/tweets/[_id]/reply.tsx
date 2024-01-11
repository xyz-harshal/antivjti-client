"use client";
import { useState, ChangeEvent,FC } from "react"
import axios from "axios"
import Cookies from "js-cookie";
import { AppDispatch, RootState } from "@/redux/store";
import { counter } from "@/redux/features/reload2Toggle";
import { useSelector, useDispatch } from "react-redux";

type postDataType={
  userId:any,
  postId:any,
  reply:string,
  writterId:any
}
interface incProps{
    userId:any,
    postId:any
}
let ReplyTweet:FC<incProps>=({userId,postId})=> {
  let dispatch = useDispatch<AppDispatch>();
  let [postData,setPostData]=useState<postDataType>()
  const [tweet, setTweet] = useState<string>('')
  const [textareaHeight, setTextareaHeight] = useState<number>(40);
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(event.target.value)
    updateTextareaHeight(event.target)
    setPostData({
      userId:userId,
      postId:postId,
      reply:event.target.value,
      writterId:Cookies?.get('user')
    });
  };
  const updateTextareaHeight = (target: HTMLTextAreaElement) => {
    const minTextareaHeight = 40;
    const maxTextareaHeight = 200;
    const newHeight = Math.min(
      maxTextareaHeight,
      Math.max(minTextareaHeight, target.scrollHeight)
    );
    setTextareaHeight(newHeight);
  };
  let handlePost=async()=>{
    try{
      await axios.post("http://localhost:4000/reply",postData);
      dispatch(counter())
      setTweet('')
    }
    catch(e:any){
      console.log(e.message);
    }
  }
  return (
    <div className="postTweet flex flex-col items-center px-44">
      <div className="flex flex-col items-center gap-4 my-borderCol px-8 py-4 w-full">
        <textarea
          value={tweet}
          onChange={handleInputChange}
          style={{ height: textareaHeight }}
          className="bg-black outline-none resize-none w-full post-input my-6 overflow-y-hidden"
          placeholder="Post your reply!"
        />
        <div className="self-end ">
          <button className="my-borderCol px-4 py-1 rounded-xl hover:bg-white hover:text-black" onClick={handlePost}>Reply</button>
        </div>
      </div>
    </div>
  )
}
export default ReplyTweet