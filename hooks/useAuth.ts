import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export let useAuth = () => {
    let router = useRouter()
    let [loading,setLoading]=useState<boolean>()
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': Cookies?.get('user'),
    }
    let authCheck = async () => {
        setLoading(false)
        try {
            let res = await axios.get("http://localhost:4000/userAuth", { headers });
            if (res.data.status == true) {
                router.push('/tweets')
            }
            if (res.data.status == false) {
                router.push('/')
            }
        }
        catch (e: any) {
            console.log(e.message);
        }
        finally{
            setLoading(true)
        }
    }
    return { authCheck,loading }
}