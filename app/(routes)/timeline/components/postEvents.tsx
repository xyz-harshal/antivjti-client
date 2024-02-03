"use client"
import { FC, useState, ChangeEvent } from "react"
import Cookies from "js-cookie";
import { postEventDataType, replyPostDataType } from "@/types/types"
import { useEventsPost } from "@/hooks/usePostEvent"
import { counter } from "@/redux/features/reloadToggle"
import { counter2 } from "@/redux/features/reload2Toggle"
import { useBase64 } from "@/hooks/useBase64"
import { MdOutlineFileUpload } from "react-icons/md"
interface incProp {
  userId: any,
  postId: any,
  reply: boolean
}
let PostEvents: FC<incProp> = ({ userId, postId, reply }) => {
  let { convertToBase64 } = useBase64()
  let { textareaHeight, updateTextareaHeight, handlePost } = useEventsPost()
  let cookie = Cookies.get('user')
  //THIS ARE THE STATES WE USED HERE
  let [imgSizeWarn, setImgSizeWarn] = useState<boolean>(false)
  let [eventData, setEventData] = useState<postEventDataType>({
    userId: cookie,
    post: "",
    img: ""
  })
  let [replyData, setReplyData] = useState<replyPostDataType>({
    userId: userId,
    postId: postId,
    reply: "",
    img: ""
  })
  let [isPost, setIsPost] = useState<boolean>(false)
  //THIS IS WHERE ALL THE DATA FROM THE USER IS STORED IN STATES
  const InputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateTextareaHeight(event.target);
    setEventData({ ...eventData, post: event.target.value })
    setReplyData({ ...replyData, reply: event.target.value })
    if (eventData.post.length > 0 || replyData.reply.length > 0) {
      setIsPost(true)
    }
    else {
      setIsPost(false)
    }
  }
  let FileUpload = async (e: any) => {
    const file = e.target.files[0];
    let fileSizeLimit = 1024 * 1024
    if (file.size > fileSizeLimit) {
      setImgSizeWarn(true)
    }
    else {
      setImgSizeWarn(false)
      const base64 = await convertToBase64(file);
      setEventData({ ...eventData, img: base64 })
      setReplyData({ ...replyData, img: base64 })
    }
  }
  //THIS IS WHERE THE DATA IS SEND TO THE HOOK SO THAT IT CAN CALL BACKEND
  let PostEvent = () => {
    if (reply == false) {
      handlePost(eventData, counter, "postEvents")
      setEventData({ userId: cookie, post:'', img:''})
    }
    if (reply == true) {
      handlePost(replyData, counter2, "reply")
      setReplyData({ ...replyData, reply:'', img:'' })
    }
  }
  return (
    <div className="postTweet flex flex-col items-center px-0 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-44">
      <div className="flex flex-col items-center gap-4 my-borderCol px-8 py-4 w-full">
        <textarea
          required={true}
          value={eventData.post}
          onChange={InputChange}
          style={{ height: textareaHeight }}
          className="bg-black outline-none resize-none w-full post-input my-6 overflow-y-hidden"
          placeholder="Tell us what happend today!"
        />
        {eventData.img?<div><img src={eventData.img} alt="" /></div>:null}
        {imgSizeWarn?<p>image size should not exceed 1MB</p>:null}
        <div className="flex flex-row justify-between w-full">
          <label className="p-3 rounded-lg my-borderCol text-base outline-none hover:bg-white hover:text-black cursor-pointer" htmlFor="uploadFile" >
            <MdOutlineFileUpload size={'2rem'} />
          </label>
          <button className={"my-borderCol px-4 py-1 rounded-xl hover:bg-white hover:text-black"} disabled={isPost ?false  : true} onClick={PostEvent}>{reply ? "Reply" : "Post"}</button>
        </div>
      </div>
      <input
        type="file"
        name="myFile"
        id="uploadFile"
        accept='.jpeg, .png, .jpg'
        onChange={(e) => FileUpload(e)}
        className=" hidden"
      />
    </div>
  )
}
export default PostEvents