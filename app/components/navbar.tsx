import { useRouter } from "next/navigation"
export default function Navbar() {
    let router = useRouter()
    return(
        <div className="flex flex-row w-full justify-center items-center my-borderCol py-2">
            <p className="text-3xl nav-text-font cursor-pointer" onClick={()=>router.push('/')}>ANTI VJTI</p>
        </div>
    )
}