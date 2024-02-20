import { useState } from "react"
import Cookies from "js-cookie"
import axios from "axios"
export function useGetUsername() {
    let [username, setUsername] = useState<string>('')
    let [isLoading, setIsLoading] = useState<boolean>(false)
    let headers = {
        'Content-Type': 'application/json',
        'Authorization':Cookies.get('user'),
    }
    let handleGetUsername = async () => {
        try {
            setIsLoading(true)
            let res=await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/getUsername`,{headers})
            setUsername(res.data.username)
        }
        catch (e:any) {
            console.log(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    return { handleGetUsername, username,isLoading }
}