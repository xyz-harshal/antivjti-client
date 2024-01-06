"use client"
import {useState,useEffect} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";
import {usePresenceStore} from "./store/store"
export default function Home() {
  let router=useRouter();
  let [isActive,setActive]=useState<boolean>()
  // if(isActive==true){
  //   let data =usePresenceStore((state)=>state.toggle)
  // }
  useEffect(()=>{
    let authCheck=async()=>{
      let headers={
        'Content-Type': 'application/json',
        'Authorization':Cookies?.get('user'),
      }
      try{
        let res=await axios.get("http://localhost:4000/homeAuth",{headers});
        if(res.data){
          setActive(true);
          // console.log(usePresenceStore((state)=>state.active))
          router.push('/tweets');
        }
       
      }
      catch(e:any){
        console.log(e.message);
      }
    }
    authCheck();
  },[])
  return (
  <div className="home">
    <p>This is home route</p>
  </div>
  )
}
