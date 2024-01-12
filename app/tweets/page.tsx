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
    <div className="mainPg mx-96">
      <PostTweets />
      {incData?.map((e) => <ReadTweet upvoteIds={e.upvoteIds} downvoteIds={e.downvoteIds} username={e.username} post={e.post} _id={e._id} key={e._id} hier={true} />)}
    </div>
  )
}