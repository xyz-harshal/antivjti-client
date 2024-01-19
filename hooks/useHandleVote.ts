import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
export let useHandleUpArrow = (upvoteIds: any, downvoteIds: any, isReply: boolean, _id: string) => {
  const [votes, setVotes] = useState(upvoteIds.length - downvoteIds.length);
  const [state, setState] = useState(0);
  const data = { userID: Cookies.get("user"), postID: _id };
  const state_value_setter = async () => {
    if (isReply) {
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/reply1/vote/check`, data)
        .then((res) => {
          setState(res.data.value);
        });
    } else {
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/vote/check`, data)
        .then((res) => {
          setState(res.data.value);
        });
    }
  };
  const handleArrowUpClick = async () => {
    if (isReply) {
      try {
        await axios
          .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/reply1/vote/up`, data)
          .then(async (res: any) => {
            setVotes(res.data.upvoteIds.length - res.data.downvoteIds.length);
            state_value_setter();
          });
      } catch (e: any) {
        console.log(e.message);
      }
    } else {
      try {
        await axios
          .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/vote/up`, data)
          .then(async (res: any) => {
            setVotes(res.data.upvoteIds.length - res.data.downvoteIds.length);
            state_value_setter();
          });
      } catch (e: any) {
        console.log(e.message);
      }
    }
  };
  const handleArrowDownClick = async () => {
    if (isReply) {
      try {
        await axios
          .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/reply1/vote/down`, data)
          .then(async (res: any) => {
            setVotes(res.data.upvoteIds.length - res.data.downvoteIds.length);
            state_value_setter();
          });
      } catch (e: any) {
        console.log(e.message);
      }
    } else {
      try {
        await axios
          .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/vote/down`, data)
          .then(async (res: any) => {
            setVotes(res.data.upvoteIds.length - res.data.downvoteIds.length);
            state_value_setter();
          });
      } catch (e: any) {
        console.log(e.message);
      }
    }
  };
  return { handleArrowUpClick, handleArrowDownClick, state_value_setter, votes, state }
}