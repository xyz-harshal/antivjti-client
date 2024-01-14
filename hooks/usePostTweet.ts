import { tweetPostDataType,replyPostDataType } from "@/types/types";
import { useState } from "react";
import axios from "axios";
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux";
export let usePostTweet = (link:string) => {
    let dispatch = useDispatch<AppDispatch>();
    const [textareaHeight, setTextareaHeight] = useState<number>(40);
    const updateTextareaHeight = (target: HTMLTextAreaElement) => {
        const minTextareaHeight = 40;
        const maxTextareaHeight = 200;
        const newHeight = Math.min(
            maxTextareaHeight,
            Math.max(minTextareaHeight, target.scrollHeight)
        );
        setTextareaHeight(newHeight);
    };
    let handlePost = async (postData:tweetPostDataType | replyPostDataType |undefined,counter:any) => {
        try {
            await axios.post(`http://localhost:4000/${link}`, postData);
            console.log(postData)
            dispatch(counter())
        }
        catch (e: any) {
            console.log(e.message);
        }
    }
    return {textareaHeight,updateTextareaHeight,handlePost}
}