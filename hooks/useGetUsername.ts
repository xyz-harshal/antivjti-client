import { useState } from "react"
import { serverGet } from "@/server/server"
export function useGetUsername() {
    let [username, setUsername] = useState<string>('')
    let [isLoading, setIsLoading] = useState<boolean>(false)
    let handleGetUsername = async () => {
        try {
            setIsLoading(true)
            let res = await serverGet('getUsername')
            setUsername(res.username)
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