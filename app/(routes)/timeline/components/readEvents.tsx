"use client"
import { FC, useEffect } from "react"
import { FaRegComment } from "react-icons/fa"
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi"
import { useRouter } from "next/navigation"
import { useHandleUpArrow } from "@/hooks/useHandleVote"
import { readEventPropType } from "@/types/types"
import { timeSince } from "@/hooks/useTimeSince"

let ReadEvents: FC<readEventPropType> = (data) => {
    let { handleArrowUpClick, handleArrowDownClick, votes, state, default_state_value } = useHandleUpArrow(data.upvoteIds, data.downvoteIds, data.isReply, data._id)
    let router = useRouter();
    useEffect(() => {
      default_state_value(data.voteData);
    }, []);
    const timeSinceText: string = timeSince(new Date(data.createdAt));
    return (
      <div className="readTweet px-0 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-44">
        <div className="flex flex-col my-borderCol pb-4">
          <div className="flex flex-col px-8 py-4 gap-2 cursor-pointer" onClick={() => (data.hier ? router.push(`/timeline/${data._id}`) : "")}>
            <p>{data.username} | <small>{timeSinceText}</small> </p>
            <p className="postTag">{data.post}</p>
            <img src={data.img} alt="" />
          </div>
          <div className="flex flex-row gap-12 px-8 items-center">
            <div className="votes flex flex-row gap-3 items-center">
              <PiArrowFatUp
                size={"1.4rem"}
                color={state == 1 ? "green" : "white"}
                onClick={handleArrowUpClick}
                className={
                  "bg-black text-white cursor-pointer transition-all ease-in hover:scale-125 active:scale-90 focus:outline-none focus:ring focus:ring-violet-300"
                }
              />
              <p>{votes}</p>
              <PiArrowFatDown
                size={"1.4rem"}
                color={state == -1 ? "orange" : "white"}
                onClick={handleArrowDownClick}
                className={
                  "bg-black text-white cursor-pointer transition-all ease-in hover:scale-125 active:scale-90 focus:outline-none focus:ring focus:ring-violet-300"
                }
              />
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <p>{data.replies}</p>
              <FaRegComment />
            </div>
          </div>
        </div>
      </div>
    );
};
export default ReadEvents;
