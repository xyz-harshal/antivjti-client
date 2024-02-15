import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
export let useLogout = () => {
    let router = useRouter()
    let logOut = () => {
        Cookies.remove('user')
        router.push('/')
    }
    return {logOut}
}