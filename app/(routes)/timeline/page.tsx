"use client"
import PostEvents from "./components/postEvents"
import ReadEvents from "./components/readEvents"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useGetEvents } from "@/hooks/useGetEvents"
import TimelineNav from "./components/timelineNav"
import LoaderSpinner from "@/app/components/loader"
export default function Tweets() {
  let selector = useSelector((state: RootState) => state.toggle.value)
  let { handleGet, incData,isLoading,didLoad, voteData } = useGetEvents()
  useEffect(() => {
    handleGet()
  }, [selector])
  return (
    <div className="mainPg mx-0 sm:mx-0 md:mx-28 lg:mx-48 xl:mx-72 2xl:mx-96">
      <TimelineNav />
      <PostEvents postId="" userId="" reply={false} />
      {isLoading || didLoad?
      <LoaderSpinner />
      :incData?.map((e,n) =>
        <ReadEvents
          replies={e.replies.length}
          upvoteIds={e.upvoteIds}
          downvoteIds={e.downvoteIds}
          username={e.username} 
          img={e.img}
          post={e.post}
          _id={e._id}
          key={n}
          hier={true}
          isReply={false}
          voteData={voteData[n]}
          createdAt={e.date}
        />
      )}
    </div>
  )
}