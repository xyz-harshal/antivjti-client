import { FC } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
interface incProps{
    userId:String,
    post:String,
    _id: String;
}
let ReadTweet: FC<incProps> = ({userId,post}) => {
    return (
        <div className="readTweet px-44">
            <div className="flex flex-col my-borderCol px-8 py-4 gap-2">
                <p>{userId}</p>
                <p>{post}</p>
                <div className="flex flex-row gap-16 mt-2">
                    <FaRegComment />
                    <FaRegHeart />
                </div>
            </div>
        </div>
    )
}
export default ReadTweet;