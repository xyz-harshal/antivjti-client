"use client"
import { useState, ChangeEvent } from "react"
import { usePostTweet } from "@/hooks/usePostTweet"
import Cookies from "js-cookie";
import { tweetPostDataType } from "@/types/types";
import { counter } from "@/redux/features/reloadToggle";
import { MdOutlineFileUpload } from "react-icons/md";
import { useBase64 } from "@/hooks/useBase64";
import { TbLogout } from "react-icons/tb";
import { useLogout } from "@/hooks/useLogout";
export default function PostTweet() {
  let {logOut}=useLogout()
  let { convertToBase64 } = useBase64()
  let { textareaHeight, updateTextareaHeight, handlePost } = usePostTweet("postTweets")
  let [postData, setPostData] = useState<tweetPostDataType>({
    userId: Cookies.get('user'),
    post: "",
    img: ""
  });
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateTextareaHeight(event.target);
    setPostData({
      ...postData,
      post: event.target.value
    })
  };
  let handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostData({
      ...postData,
      img: base64
    })
  }
  let handleTweetPost = () => {
    handlePost(postData, counter)
    setPostData({
      userId: Cookies.get('user'),
      post: "",
      img: ""
    })
  }
  return (
    <div className="postTweet flex flex-col items-center px-0 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-44">
      <div className="w-full flex flex-row justify-between items-center my-borderCol py-3 px-8">
        <p>VJTI SOCIALS</p>
        <div className="p-2 rounded-lg my-borderCol cursor-pointer" onClick={logOut} >
          <TbLogout size={'1.6rem'} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 my-borderCol px-8 py-4 w-full">
        <textarea
          value={postData.post}
          onChange={handleInputChange}
          style={{ height: textareaHeight }}
          className="bg-black outline-none resize-none w-full post-input my-6 overflow-y-hidden"
          placeholder="Tell us what happend today!"
        />
        <div>
          <img src={postData.img} alt="" />
        </div>
        <div className="flex flex-row justify-between w-full">
          <label className="p-3 rounded-lg my-borderCol text-base outline-none hover:bg-white hover:text-black cursor-pointer" htmlFor="uploadFile" >
            <MdOutlineFileUpload size={'2rem'} />
          </label>
          <button className="my-borderCol px-4 py-1 rounded-xl hover:bg-white hover:text-black" onClick={handleTweetPost}>Post</button>
        </div>
      </div>
      <input
        type="file"
        name="myFile"
        id="uploadFile"
        accept='.jpeg, .png, .jpg'
        onChange={(e) => handleFileUpload(e)}
        className=" hidden"
      />
    </div>
  )
}