import { useRouter } from "next/navigation"
import logo from "@/images/Anti-vjti.png"
import { FaGithub } from "react-icons/fa";
export default function Navbar() {
    let router = useRouter()
    return(
        <div className="flex flex-row w-full justify-between items-center  py-2 px-8">
            <img src={logo.src} alt="heihe" className="w-36 cursor-pointer" onClick={()=>router.push('/')} />
            <FaGithub className="cursor-pointer" onClick={()=>router.push('https://github.com/xyz-harshal/antivjti-client')} size={'2rem'} />
        </div>
    )
}