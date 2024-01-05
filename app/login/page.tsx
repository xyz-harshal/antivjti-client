"use client";
import axios from "axios";
import { useState } from "react";
type loginDataType = {
  email: string,
  password: string
}
export default function Login() {

  let [loginData, setLoginData] = useState<loginDataType>({
    email: "",
    password: ""
  });
  let handleLoginData = async () => {
    try {
      if (loginData.email.endsWith('.vjti.ac.in')) {
        let response = await axios.post('http://localhost:4000/login', loginData);
        switch (response.data) {
          case "loggedIN": alert("logged in nicely")
            break;
          case "NOemail": alert("no email found kindly register yourself")
            break;
          case "NOpassword": alert("incorresct password try again")
            break;
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
          <input type="email" className="bg-black outline-none my-borderCol rounded-md p-1" autoComplete="username" onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }} />
        </div>
        <div className="flex flex-col items-start gap-2">
          <p>Password</p>
          <input type="password" className="bg-black outline-none my-borderCol rounded-md p-1" autoComplete="current-password" onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }} />
        </div>
        <div className="flex flex-row justify-end w-full">
          <button className="my-borderCol px-4 rounded-lg py-1" onClick={handleLoginData}>login</button>
        </div>

      </div>
    </div>
  )
}