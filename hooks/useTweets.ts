import axios from "axios";
import Cookies from "js-cookie"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { tweetsMapDataType } from "@/types/types";

export let useTweets = () => {
    let router = useRouter()
    let [incData, setIncData] = useState<tweetsMapDataType[]>()
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': Cookies?.get('user'),
    }
    let handleGet = async () => {
        try {
            let mainRes = await axios.get('http://localhost:4000/userAuth', { headers })
            console.log(true)
            if (mainRes.data.status == true) {
                let res = (await axios.get("http://localhost:4000/getTweets"));
                setIncData(res.data)
            }
            if (mainRes.data.status == false) {
                router.push('/');
            }
        }
        catch (e: any) {
            console.log(e.message)
        }
    }
    return {handleGet,incData}
}