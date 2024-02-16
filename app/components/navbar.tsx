import { useRouter } from "next/navigation"
import logo from "@/images/Anti-vjti.png"
import { FaGithub } from "react-icons/fa";
export default function Navbar() {
    let router = useRouter()
    return(
        <div className="flex flex-row w-full justify-between items-center  py-2 px-8 border-b border-gray-500">
            <img src={logo.src} alt="logo" className="w-36 cursor-pointer" onClick={()=>router.push('/')} />
            <a href="https://github.com/xyz-harshal/antivjti-client" target='_blank'><FaGithub className="cursor-pointer" size={'2rem'} /></a>
        </div>
    )
}