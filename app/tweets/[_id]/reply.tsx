"use client";
import { useState, ChangeEvent, FC } from "react"
import Cookies from "js-cookie";
import { counter2 } from "@/redux/features/reload2Toggle";
import { replyPostDataType } from "@/types/types"
import { usePostTweet } from "@/hooks/usePostTweet";
import { useBase64 } from "@/hooks/useBase64";
import { MdOutlineFileUpload } from "react-icons/md";
interface incProps {
  userId: any,
  postId: any,
}
let ReplyTweet: FC<incProps> = ({ userId, postId}) => {
  let { convertToBase64 } = useBase64()
  let { textareaHeight, updateTextareaHeight, handlePost } = usePostTweet("reply")
  let [postData, setPostData] = useState<replyPostDataType>({
    userId: "",
    postId: "",
    reply: "",
    img: "",
    writterId: Cookies?.get('user')
  })
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateTextareaHeight(event.target)
    setPostData({
      ...postData,
      userId:userId,
      postId:postId,
      reply: event.target.value,
    });
  };
  let handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostData({
      ...postData,
      img: base64
    })
  }
  let handleRepliesPost = () => {
    console.log(postData)
    handlePost(postData, counter2)
    setPostData({
      ...postData,
      reply: "",
      img:""
    })
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
        <div>
          <img src={postData.img} alt="" />
        </div>
        <div className="flex flex-row justify-between w-full">
          <label className="p-3 rounded-lg my-borderCol text-base outline-none hover:bg-white hover:text-black" htmlFor="uploadFile" >
            <MdOutlineFileUpload size={'2rem'} />
          </label>
          <button className="my-borderCol px-4 py-1 rounded-xl hover:bg-white hover:text-black" onClick={handleRepliesPost}>Reply</button>
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
export default ReplyTweet