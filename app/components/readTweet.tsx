"use client";
import { FC, useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";
import { useRouter } from "next/navigation";
import mongoose from "mongoose";
import Cookies from "js-cookie";
import axios from "axios";
import { stripVTControlCharacters } from "util";


interface incProps {
  username: string | undefined;
  post: string | undefined;
  _id: string | undefined;
  hier: boolean | undefined;
  upvoteIds: [mongoose.Schema.Types.ObjectId] | undefined;
  downvoteIds: [mongoose.Schema.Types.ObjectId] | undefined;
  isReply:boolean;
}

let ReadTweet: FC<incProps> = ({
  username,
  post,
  _id,
  hier,
  upvoteIds,
  downvoteIds,
  isReply
}) => {
  if (upvoteIds === undefined || downvoteIds === undefined){
    return(<div>loading</div>)
  }else{
  const [votes, setVotes] = useState(upvoteIds.length - downvoteIds.length);
  const [state, setState] = useState(0);
  const data = { userID: Cookies.get("user"), postID: _id };
  const state_value_setter = async () => {
    if(isReply){
      let response1 = await axios
      .post("http://localhost:4000/reply1/vote/check", data)
      .then((res) => {
        setState(res.data.value);
      });
    }else{
    let response1 = await axios
      .post("http://localhost:4000/vote/check", data)
      .then((res) => {
        setState(res.data.value);
      });}
  };
  useEffect(() => {
    state_value_setter();
  }, []);

  let router = useRouter();
  const handleArrowUpClick = async () => {
    if (isReply){
      try {
        let res = await axios
          .post("http://localhost:4000/reply1/vote/up", data)
          .then(async (res: any) => {
            setVotes(res.data.upvoteIds.length - res.data.downvoteIds.length);
            state_value_setter();
          });
      } catch (e: any) {
        console.log(e.message);
      }
    }else{
    try {
      let res = await axios
        .post("http://localhost:4000/vote/up", data)
        .then(async (res: any) => {
          setVotes(res.data.upvoteIds.length - res.data.downvoteIds.length);
          state_value_setter();
        });
    } catch (e: any) {
      console.log(e.message);
    }}
  };
  const handleArrowDownClick = async () => {
    if (isReply){
      try {
        let res = await axios
          .post("http://localhost:4000/reply1/vote/down", data)
          .then(async (res: any) => {
            setVotes(res.data.upvoteIds.length - res.data.downvoteIds.length);
            state_value_setter();
          });
      } catch (e: any) {
        console.log(e.message);
      }
    }else{
    try {
      let res = await axios
        .post("http://localhost:4000/vote/down", data)
        .then(async (res: any) => {
          setVotes(res.data.upvoteIds.length - res.data.downvoteIds.length);
          state_value_setter();
        });
    } catch (e: any) {
      console.log(e.message);
    }}
  };
  

  return (
    <div className="readTweet px-44">
      <div className="flex flex-col my-borderCol pb-4">
        <div
          className="flex flex-col px-8 py-4 gap-2 cursor-pointer"
          onClick={() => (hier ? router.push(`/tweets/${_id}`) : "")}
        >
          <p>{username}</p>
          <p>{post}</p>
        </div>
        <div className="flex flex-row gap-16 px-8 items-center">
          <div className="votes flex flex-row gap-3 items-center">
            <PiArrowFatUp
              size={"1.4rem"}
              color={state === 1 ? "green" : "white"}
              onClick={handleArrowUpClick}
              className={
                "bg-black text-white cursor-pointer transition-all ease-in hover:scale-125 active:scale-90 focus:outline-none focus:ring focus:ring-violet-300"
              }
            />
            <p>{votes}</p>
            <PiArrowFatDown
              size={"1.4rem"}
              color={state === -1 ? "orange" : "white"}
              onClick={handleArrowDownClick}
/>
            <p>{hier?votes:""}</p>
            <PiArrowFatDown size={"1.4rem"} onClick={handleArrowDownClick}

              className={
                "bg-black text-white cursor-pointer transition-all ease-in hover:scale-125 active:scale-90 focus:outline-none focus:ring focus:ring-violet-300"
              }
            />
          </div>
          {hier ? <FaRegComment /> : ""}
        </div>
      </div>
    </div>
  );
}};
export default ReadTweet;
