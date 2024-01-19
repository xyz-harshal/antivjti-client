import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export let useAuth = () => {
    let router = useRouter()
    let cookie = Cookies?.get('user')
    let authCheck = async () => {
        console.log(process.env)
        if (cookie) router.push('/tweets')
        else router.push('/')
    }
    return { authCheck }
}