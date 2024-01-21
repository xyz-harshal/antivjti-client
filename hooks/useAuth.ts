import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export let useAuth = () => {
    let router = useRouter()
    let cookie = Cookies?.get('user')
    let authCheck = async () => {
        if (cookie) router.push('/timeline')
        else router.push('/')
    }
    return { authCheck }
}