"use client"
import PostEvents from "./components/postEvents"
import ReadEvents from "./components/readEvents"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useGetEvents } from "@/hooks/useGetEvents"
import { TbLogout } from "react-icons/tb";
import { useLogout } from "@/hooks/useLogout"

export default function Tweets() {
  let { logOut } = useLogout()
  let selector = useSelector((state: RootState) => state.toggle.value)
  let { handleGet, incData } = useGetEvents()
  useEffect(() => {
    handleGet()
  }, [selector])

  return (
    <div className="mainPg mx-0 sm:mx-0 md:mx-28 lg:mx-48 xl:mx-72 2xl:mx-96">
      <div className="flex flex-row justify-between items-center my-borderCol py-3 px-8 mx-0 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-36 2xl:mx-44">
        <p>VJTI ANTI SOCIALS</p>
        <div className="p-2 rounded-lg my-borderCol cursor-pointer" onClick={logOut} >
          <TbLogout size={'1.6rem'} />
        </div>
      </div>
      <PostEvents />
      {incData?.map((e,n) =>
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
        />
      )}
    </div>
  )
}