"use client"
import { FC, useEffect } from "react"
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi"
import { useRouter } from "next/navigation"
import { useHandleUpArrow } from "@/hooks/useHandleVote"
import { readEventPropType } from "@/types/types"
import { timeSince } from "@/hooks/useTimeSince"
import { TbMessages } from "react-icons/tb";
import { Mukta } from "next/font/google"
const mukta = Mukta({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
})
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
        <div className="flex flex-col px-6 py-4 gap-2 cursor-pointer" onClick={() => (data.hier ? router.push(`/timeline/${data._id}`) : null)}>
          <div className="flex flex-row item-center gap-2 text-lg"><p className={mukta.className}>{data.username}</p> | <span className="text-gray-400 text-sm self-center">{timeSinceText}</span> </div>
          <p className="postTag">{data.post}</p>
          {data?.img ? <img src={data.img} alt="" className="rounded-lg" /> : null}
        </div>
        <div className="flex flex-row gap-12 px-6 items-center">
          <div className="votes flex flex-row gap-3 items-center">
            <PiArrowFatUp
              size={"1.4rem"}
              color={state == 1 ? "green" : "grey"}
              onClick={handleArrowUpClick}
              className={
                "bg-black text-white cursor-pointer transition-all ease-in hover:scale-125 active:scale-90 focus:outline-none focus:ring focus:ring-violet-300"
              }
            />
            <p className="text-gray-400">{votes}</p>
            <PiArrowFatDown
              size={"1.4rem"}
              color={state == -1 ? "orange" : "grey"}
              onClick={handleArrowDownClick}
              className="bg-black text-white cursor-pointer transition-all ease-in hover:scale-125 active:scale-90 focus:outline-none focus:ring focus:ring-violet-300"
            />
          </div>
          {data.isReply ? null : <div className="flex flex-row justify-center items-center gap-3 cursor-pointer" onClick={() => (data.hier ? router.push(`/timeline/${data._id}`) : null)} >
            <p className="text-gray-400">{data.replies}</p>
            <TbMessages size={'1.2rem'} color={'grey'} />
          </div>}
        </div>
      </div>
    </div>
  );
};
export default ReadEvents;
