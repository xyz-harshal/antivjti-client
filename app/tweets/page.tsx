"use client"
import PostTweets from "../components/postTweet"
import ReadTweet from "../components/readTweet"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useTweets } from "@/hooks/useTweets"

export default function Tweets() {
  let selector = useSelector((state: RootState) => state.toggle.value)
  let { handleGet, incData } = useTweets()
  useEffect(() => {
    handleGet()
  }, [selector])
  return (
    <div className="mainPg mx-0 sm:mx-0 md:mx-28 lg:mx-48 xl:mx-72 2xl:mx-96">
      <PostTweets />
      {incData?.map((e) => <ReadTweet replies={e.replies.length} upvoteIds={e.upvoteIds} downvoteIds={e.downvoteIds} username={e.username} img={e.img} post={e.post} _id={e._id} key={e._id} hier={true} isReply={false}/>)}
    </div>
  )
}