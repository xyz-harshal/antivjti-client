"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import ReadEvents from "../../components/readEvents";
import ReplyTweet from "./components/reply";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { replyDataType,specificEventDataType } from "@/types/types";

export default function Page({ params }: { params: { _id: string } }) {
  let selector = useSelector((state: RootState) => state.toggle2.value)
  let [specficEventData, setSpecificEventData] = useState<specificEventDataType>()
  let [allReplyData, setAllReplyData] = useState<replyDataType[]>()
  useEffect(() => {
    let fetch = async () => {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/getSpecificTweet`, {
          _id: params._id,
        }).then((res) => {
          setSpecificEventData(res.data)
        });
        await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/getReplies`, {
          _id: params._id,
        }).then((res) => setAllReplyData(res.data))
      } catch (e: any) {
        console.log(e.message)
      }
    }
    fetch()
  }, [selector])
  return (
    <div className="mx-0 sm:mx-0 md:mx-28 lg:mx-48 xl:mx-72 2xl:mx-96">
      <ReadEvents
        username={specficEventData?.username}
        post={specficEventData?.post}
        replies={specficEventData?.replies.length}
        img={specficEventData?.img}
        _id={specficEventData?._id}
        hier={false}
        upvoteIds={specficEventData?.upvoteIds}
        downvoteIds={specficEventData?.downvoteIds}
        isReply={false}
      />
      <ReplyTweet userId={specficEventData?.userID} postId={specficEventData?._id} />
      {allReplyData?.map((e, i) => (
        <ReadEvents
          username={e.writterName}
          post={e.reply}
          replies={0}
          img={e.img}
          _id={e._id}
          hier={false}
          upvoteIds={e?.upvoteIds}
          downvoteIds={e?.downvoteIds}
          isReply={true}
          key={i}
        />
      ))}
    </div>
  );
}
