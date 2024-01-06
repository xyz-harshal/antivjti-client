"use client";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import {useRouter } from "next/navigation";
type loginDataType = {
  email: string,
  password: string
}
type errorDataType = {
  email: boolean,
  password: boolean
}
export default function Login() {
  let router=useRouter();
  let [error, setError] = useState<errorDataType>()
  let [loginData, setLoginData] = useState<loginDataType>({
    email: "",
    password: ""
  })
  let handleLoginData = async () => {
    try {
      if (loginData.email.endsWith('.vjti.ac.in')) {
        let res = await axios.post('http://localhost:4000/login', loginData)
        setError(res.data.error);
        if (res.data.error.email == true && res.data.error.password == true) {
          Cookies.set("user", res.data.token);
          router.push('/tweets');
        }
        else{
          Cookies.set("user",'');
        }
      }
      else {
        console.log(false);
      }
    }
    catch (e: any) {
      console.log(e.message);
    }
  }
  return (
    <div className="login flex flex-row justify-center">
      <div className="flex flex-col items-center my-borderCol p-8 gap-6">
        <p> Login page</p>
        <div className="flex flex-col items-start gap-2">
          <p>Email</p>
          <p>{error?.email == false && error.password == false ? "email does not exist, register" : ""}</p>
          <input type="email" className="bg-black outline-none my-borderCol rounded-md p-1" autoComplete="username" onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }} />
        </div>
        <div className="flex flex-col items-start gap-2">
          <p>Password</p>
          <p>{error?.email == true && error.password == false ? "incorrect password" : ""}</p>
          <input type="password" className="bg-black outline-none my-borderCol rounded-md p-1" autoComplete="current-password" onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }} />
        </div>
        <div className="flex flex-row justify-end w-full">
          <button className="my-borderCol px-4 rounded-lg py-1" onClick={handleLoginData}>login</button>
        </div>

      </div>
    </div>
  )
}