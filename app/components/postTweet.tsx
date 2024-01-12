"use client"
import { useState, ChangeEvent } from "react"
import { usePostTweet } from "@/hooks/usePostTweet"
import Cookies from "js-cookie";
import { tweetPostDataType } from "@/types/types";
import { counter } from "@/redux/features/reloadToggle";
export default function PostTweet() {
  let userId = Cookies.get('user')
  let { tweet, textareaHeight,updateTextareaHeight,setTweet, handlePost } = usePostTweet("postTweets")
  let [postData, setPostData] = useState<tweetPostDataType>();
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(event.target.value);
    updateTextareaHeight(event.target);
    setPostData({
        userId: userId,
        post: event.target.value
    });
};
let handleTweetPost=()=>{
  handlePost(postData,counter)
}
  return (
    <div className="postTweet flex flex-col items-center px-44">
      <div className="w-full flex flex-row justify-center my-borderCol py-3">
        <p>For you</p>
      </div>
      <div className="flex flex-col items-center gap-4 my-borderCol px-8 py-4 w-full">
        <textarea
          value={tweet}
          onChange={handleInputChange}
          style={{ height: textareaHeight }}
          className="bg-black outline-none resize-none w-full post-input my-6 overflow-y-hidden"
          placeholder="Tell us what happend today!"
        />
        <div className="self-end ">
          <button className="my-borderCol px-4 py-1 rounded-xl hover:bg-white hover:text-black" onClick={handleTweetPost}>Post</button>
        </div>
      </div>

    </div>
  )
}