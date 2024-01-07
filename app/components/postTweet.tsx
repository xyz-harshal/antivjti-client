"use client";
import { useState, ChangeEvent } from "react";
import Cookies from "js-cookie";
import axios from "axios";
type postDataType={
  userId:any,
  post:string
}
export default function PostTweet() {
  let userId=Cookies.get('user');
  let [postData,setPostData]=useState<postDataType>({
    userId:"",
    post:""
  });
  const [tweet, setTweet] = useState<string>('');
  const [textareaHeight, setTextareaHeight] = useState<number>(40);
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(event.target.value);
    updateTextareaHeight(event.target);
    setPostData({
      userId:userId,
      post:event.target.value
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
      await axios.post("http://localhost:4000/post",postData);
    }
    catch(e:any){
      console.log(e.message);
    }
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
          <button className="my-borderCol px-4 py-1 rounded-xl hover:bg-white hover:text-black" onClick={handlePost}>Submit</button>
        </div>
      </div>

    </div>
  )
}