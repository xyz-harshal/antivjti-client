import { postEventDataType, replyPostDataType } from "@/types/types";
import { useState } from "react";
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux";
import { server } from "@/server/server";

export let useEventsPost = () => {
    let dispatch = useDispatch<AppDispatch>();
    let [didLoad, setDidLoad] = useState<boolean>()
    let [textareaHeight, setTextareaHeight] = useState<number>(40);
    let updateTextareaHeight = (target: HTMLTextAreaElement) => {
        let minTextareaHeight = 40;
        let maxTextareaHeight = 200;
        let newHeight = Math.min(
            maxTextareaHeight,
            Math.max(minTextareaHeight, target.scrollHeight)
        )
        setTextareaHeight(newHeight)
    }
    let handlePost = async (postData: postEventDataType | replyPostDataType | undefined, counter: any, link: string) => {
        try {
            setDidLoad(true)
            await server(postData, link)
            setTextareaHeight(40)
        }
        catch (e: any) {
            console.log(e.message);
        }
        finally {
            setTimeout(() => {
                dispatch(counter())
            }, 500)
            setDidLoad(false)
        }
    }
    return { textareaHeight, updateTextareaHeight, handlePost, didLoad }
}