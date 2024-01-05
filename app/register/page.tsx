"use client";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
type RegisterDataType = {
  email: string,
  password: string
}
export default function Register() {
  let [registeredData, setRegisteredData] = useState<RegisterDataType>({
    email: "",
    password: ""
  });
  let handleRegisterData = async () => {
    try {
      if (registeredData.email.endsWith('.vjti.ac.in')) {
        let response = await axios.post('http://localhost:4000/register', registeredData);
        Cookies.set('user', response.data.token);
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
    <div className="register flex flex-row justify-center">
      <div className="flex flex-col items-center my-borderCol p-8 gap-6">
        <p>Register here</p>
        <div className="flex flex-col items-start gap-2">
          <p>Email</p>
          <input type="email" className="bg-black outline-none my-borderCol rounded-md p-1" autoComplete="username" onChange={(e) => { setRegisteredData({ ...registeredData, email: e.target.value }) }} />
        </div>
        <div className="flex flex-col items-start gap-2">
          <p>Password</p>
          <input type="password" className="bg-black outline-none my-borderCol rounded-md p-1" autoComplete="current-password" onChange={(e) => { setRegisteredData({ ...registeredData, password: e.target.value }) }} />
        </div>
        <div className="flex flex-row justify-end w-full">
          <button className="my-borderCol px-4 rounded-lg py-1" onClick={handleRegisterData}>Register</button>
        </div>
      </div>
    </div>
  )
}