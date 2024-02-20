import { useState } from "react";
import Cookies from "js-cookie";
import { server } from "@/server/server";
export let useHandleUpArrow = (upvoteIds: any, downvoteIds: any, isReply: boolean, _id: string) => {
  const [votes, setVotes] = useState<number>(upvoteIds?.length - downvoteIds?.length);
  const [state, setState] = useState<number>(0);
  const data = { userID: Cookies.get("user"), postID: _id, isReply: isReply }

  const state_value_setter = async () => {
    let res = await server(data, 'vote/check')
    setState(res.value);
  }
  const default_state_value = (value: number) => {
    setState(value);
  }

  const handleArrowUpClick = async () => {
    try {
      let res = await server(data, 'vote/up')
      setVotes(res.upvoteIds.length - res.downvoteIds.length);
      state_value_setter()
    } catch (e: any) {
      console.log(e.message)
    }
  }

  const handleArrowDownClick = async () => {
    try {
      let res = await server(data, 'vote/down')
      setVotes(res.upvoteIds.length - res.downvoteIds.length)
      state_value_setter()
    } catch (e: any) {
      console.log(e.message)
    }
  }
  return { handleArrowUpClick, handleArrowDownClick, state_value_setter, votes, state, default_state_value }
}