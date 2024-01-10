"use client"
import { FC } from "react"
import { FaRegComment } from "react-icons/fa"
import { PiArrowFatDown,PiArrowFatUp } from "react-icons/pi"
interface incProps{
    userId:String,
    post:String,
    _id: String
}

let ReadTweet: FC<incProps> = ({userId,post}) => {
    return (
        <div className="readTweet px-44">
            <div className="flex flex-col my-borderCol px-8 py-4 gap-2">
                <p>{userId}</p>
                <p>{post}</p>
                <div className="flex flex-row gap-16 mt-2">
                    <div className="votes flex flex-row gap-3 items-center">
                        <PiArrowFatUp size={"1.4rem"}  />
                        <p>{}</p>
                       <PiArrowFatDown size={"1.4rem"}   />
                    </div>
                    <FaRegComment />
                </div>
            </div>
        </div>
    )
}
export default ReadTweet;