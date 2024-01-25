import { postEventDataType, replyPostDataType } from "@/types/types";
import { useState } from "react";
import axios from "axios";
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

export let useEventsPost = () => {
    let dispatch = useDispatch<AppDispatch>();
    const [textareaHeight, setTextareaHeight] = useState<number>(40);
    const updateTextareaHeight = (target: HTMLTextAreaElement) => {
        const minTextareaHeight = 40;
        const maxTextareaHeight = 200;
        const newHeight = Math.min(
            maxTextareaHeight,
            Math.max(minTextareaHeight, target.scrollHeight)
        )
        setTextareaHeight(newHeight)
    }
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': Cookies?.get('user'),
    }
    let handlePost = async (postData: postEventDataType | replyPostDataType | undefined, counter: any,link: string) => {
        try {
            await axios.post(process.env.NEXT_PUBLIC_SERVER_URL+'/'+link, postData,{headers});
            setTimeout(() => {
                dispatch(counter())
            }, 500);
            setTextareaHeight(40)
        }
        catch (e: any) {
            console.log(e.message);
        }
    }
    return { textareaHeight, updateTextareaHeight, handlePost }
}