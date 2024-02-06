import Cookies from "js-cookie"
import axios from "axios"
import { useState } from "react"
export function useGetUsername() {
    let [username, setUsername] = useState<string>('')
    let [isLoading, setIsLoading] = useState<boolean>(false)
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': Cookies?.get('user'),
        'Key': process.env.NEXT_PUBLIC_KEY,
    }
    let handleGetUsername = async () => {
        try {
            setIsLoading(true)
            let response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/getUsername`, { headers })
            setUsername(response.data.username)
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