"use client"
import { useState, ChangeEvent } from "react"
import Cookies from "js-cookie";
import { postEventDataType } from "@/types/types";
import { useEventsPost } from "@/hooks/usePostEvent"
import { counter } from "@/redux/features/reloadToggle";
import { useBase64 } from "@/hooks/useBase64";
import { MdOutlineFileUpload } from "react-icons/md";

let PostEvents=()=>{
  let { convertToBase64 } = useBase64()
  let { textareaHeight, updateTextareaHeight, handlePost } = useEventsPost("postEvents")
  let cookie=Cookies.get('user')
  //THIS ARE THE STATES WE USED HERE
  let [imgSizeWarn, setImgSizeWarn] = useState<boolean>(false)
  let [eventData, setEventData] = useState<postEventDataType>({
    userId: cookie,
    post: "",
    img: ""
  })
  //THIS IS WHERE ALL THE DATA FROM THE USER IS STORED IN STATES
  const InputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateTextareaHeight(event.target);Cookies.get('user')
    setEventData({...eventData,post: event.target.value})
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
      setEventData({...eventData,img: base64})
    }
  }
  //THIS IS WHERE THE DATA IS SEND TO THE HOOK SO THAT IT CAN CALL BACKEND
  let PostEvent = () => {
    handlePost(eventData, counter)
    setEventData({
      userId: cookie,
      post: "",
      img: ""
    })
  }

  return (
    <div className="postTweet flex flex-col items-center px-0 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-44">
      <div className="flex flex-col items-center gap-4 my-borderCol px-8 py-4 w-full">
        <textarea
          value={eventData.post}
          onChange={InputChange}
          style={{ height: textareaHeight }}
          className="bg-black outline-none resize-none w-full post-input my-6 overflow-y-hidden"
          placeholder="Tell us what happend today!"
        />
        <div>
          <img src={eventData.img} alt="" />
        </div>
        <p>{imgSizeWarn ? "image size should not exceed 1MB" : ""}</p>
        <div className="flex flex-row justify-between w-full">
          <label className="p-3 rounded-lg my-borderCol text-base outline-none hover:bg-white hover:text-black cursor-pointer" htmlFor="uploadFile" >
            <MdOutlineFileUpload size={'2rem'} />
          </label>
          <button className="my-borderCol px-4 py-1 rounded-xl hover:bg-white hover:text-black" onClick={PostEvent}>Post</button>
        </div>
      </div>
      <input
        type="file"
        name="myFile"
        id="uploadFile"
        accept='.jpeg, .png, .jpg'
        onChange={(e) =>FileUpload(e)}
        className=" hidden"
      />
    </div>
  )
}
export default PostEvents