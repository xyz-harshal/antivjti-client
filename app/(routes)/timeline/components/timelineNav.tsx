import { useLogout } from "@/hooks/useLogout"
import { TbLogout } from "react-icons/tb"
import { useEffect } from "react";
import { useGetUsername } from "@/hooks/useGetUsername"
import antiVjtiImg from '@/images/Anti-vjti.png'
import { useRouter } from "next/navigation"
export default function TimelineNav() {
    let { logOut } = useLogout()
    let router = useRouter()
    let { handleGetUsername, username,isLoading } = useGetUsername()
    useEffect(() => {
        handleGetUsername()
    }, [])
    return (
        <div className="flex flex-row justify-between items-center my-borderCol py-3 px-4 mx-0 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-36 2xl:mx-44">
            <img src={antiVjtiImg.src} alt="anti-vjti-logo" className="w-32 cursor-pointer" onClick={() => router.push('/')} />
            <div className="flex flex-row justify-center items-center gap-4">
                <div className="p-2 rounded-lg my-borderCol">
                    <p>{isLoading?"Welcome":username}</p>
                </div>
                <div className="p-2 rounded-lg my-borderCol cursor-pointer" onClick={logOut} >
                    <TbLogout size={'1.4rem'} />
                </div>
            </div>
        </div>
    )
}