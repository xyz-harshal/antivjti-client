"use client";
import { useState, ChangeEvent,FC } from "react"
import Cookies from "js-cookie";
import { counter2 } from "@/redux/features/reload2Toggle";
import { replyPostDataType } from "@/types/types"
import { usePostTweet } from "@/hooks/usePostTweet";
interface incProps{
    userId:any,
    postId:any
}
let ReplyTweet:FC<incProps>=({userId,postId})=> {
  let { textareaHeight,updateTextareaHeight, handlePost } = usePostTweet("reply")
  let [postData,setPostData]=useState<replyPostDataType>()
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateTextareaHeight(event.target)
    setPostData({
      userId:userId,
      postId:postId,
      reply:event.target.value,
      writterId:Cookies?.get('user')
    });
  };
 let handleRepliesPost=()=>{
  handlePost(postData,counter2)
 } 
 
  return (
    <div className="postTweet flex flex-col items-center px-44">
      <div className="flex flex-col items-center gap-4 my-borderCol px-8 py-4 w-full">
        <textarea
          value={postData?.reply}
          onChange={handleInputChange}
          style={{ height: textareaHeight }}
          className="bg-black outline-none resize-none w-full post-input my-6 overflow-y-hidden"
          placeholder="Post your reply!"
        />
        <div className="self-end ">
          <button className="my-borderCol px-4 py-1 rounded-xl hover:bg-white hover:text-black" onClick={handleRepliesPost}>Reply</button>
        </div>
      </div>
    </div>
  )
}
export default ReplyTweet