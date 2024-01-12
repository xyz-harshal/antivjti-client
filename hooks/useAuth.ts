import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";

export let useAuth = () => {
    let router = useRouter()
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': Cookies?.get('user'),
    }
    let authCheck = async () => {
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
    }
    return { authCheck }
}