import axios from "axios";
import Cookies from "js-cookie"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { tweetsMapDataType } from "@/types/types";

export let useTweets = () => {
    let router = useRouter()
    let [incData, setIncData] = useState<tweetsMapDataType[]>()
    let cookie=Cookies?.get('user')
    // let headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': Cookies?.get('user'),
    // }
    let handleGet = async () => {
        try {
            if (cookie) {
                let res = (await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/getTweets`));
                setIncData(res.data)
            }
            else router.push('/');
            
        }
        catch (e: any) {
            console.log(e.message)
        }
    }
    return {handleGet,incData}
}