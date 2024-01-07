"use client"
import {useState,useEffect} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Home() {
  let router=useRouter();
  let headers={
    'Content-Type': 'application/json',
    'Authorization':Cookies?.get('user'),
  }
  useEffect(()=>{
    let authCheck=async()=>{
      try{
        let res=await axios.get("http://localhost:4000/mainAuth",{headers});
        console.log(res.data)
        if(res.data.status==true){
          router.push('/tweets')
        }
        if(res.data.status==false){
          router.push('/')
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
