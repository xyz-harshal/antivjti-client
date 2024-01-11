"use client"
import { FC } from "react"
import { FaRegComment } from "react-icons/fa"
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi"
import { useRouter } from "next/navigation"
interface incProps {
    username: string | undefined,
    post: string | undefined,
    _id: string | undefined,
    hier: boolean | undefined
}

let ReadTweet: FC<incProps> = ({ username, post, _id, hier }) => {
    let router = useRouter()
    return (
        <div className="readTweet px-44">
            <div className="flex flex-col my-borderCol pb-4" >
                <div className="flex flex-col px-8 py-4 gap-2 cursor-pointer" onClick={() => hier ? router.push(`/tweets/${_id}`) : ""}>
                    <p>{username}</p>
                    <p>{post}</p>
                </div>
                <div className="flex flex-row gap-16 px-8 items-center  gap-2">
                    <div className="votes flex flex-row gap-3 items-center">
                        <PiArrowFatUp size={"1.4rem"} />
                        <p>{ }</p>
                        <PiArrowFatDown size={"1.4rem"} />
                    </div>
                    {hier?<FaRegComment />:""}
                </div>
            </div>
        </div>
    )
}
export default ReadTweet;