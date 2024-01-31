"use client";
import { useState, useRef } from "react";
import { useRegister } from "@/hooks/useRegister";
import { credDataType, svgproptype } from "@/types/types";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";
import Navbar from "@/app/components/navbar";
import { Ubuntu } from "next/font/google";
import axios from 'axios'
const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Register() {
  let [sendMail, setSendMail] = useState<boolean>(false);
  let [recivedOTP, setRecivedOtp] = useState<number>(0);
  let [registeredData, setRegisteredData] = useState<credDataType>({
    email: "",
    password: "",
    otp:['','','','','','']
  });
  const otpInputsRef = useRef<Array<HTMLInputElement | null>>([]);

  let { handleRegisterData, error, isLoading } = useRegister();
  let response

  let handleRegister = () => {
    if (sendMail){
    setSendMail(!sendMail);
    let numOTP : number = 0;
    registeredData.otp.forEach((n, index)=>{
      numOTP+= (10**(5-index))*Number(n)
    })
    if (recivedOTP===numOTP){
    handleRegisterData(registeredData);
    }else{
      setRecivedOtp(-1);
    }
  }else{
    axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/otpGenerate`, registeredData).then((res)=>{
      response = res.data;
      if(response.status===200 ){
        setRecivedOtp(response.otp)
      }
    })
    setSendMail(!sendMail);

  }
  };
  let router = useRouter();

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const value = e.target.value;
    const newOTP: string[] = [...registeredData.otp];
    newOTP[index] = value.substring(value.length - 1);
    setRegisteredData({email:registeredData.email, password:registeredData.password, otp:newOTP});
    if (index < otpInputsRef.current.length - 1 && value.length === 1) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 items-center justify-center mt-56">
        <div className="flex flex-col items-center my-borderCol rounded-lg shadow-lg overflow-hidden p-8 gap-6">
          <h2 className="auth-header text-5xl text-violet-600">Register</h2>
          <div className="flex flex-col items-start gap-2 ">
            <p className={ubuntu.className + " text-xl"}>Email</p>
            <p className={ubuntu.className}>
              {error ? "email already exist\n" : null}
              {recivedOTP===-1 ?"OTP incorrect Please try again": null}
            </p>
            <input
              type="email"
              className="bg-black outline-none my-borderCol rounded-md p-1"
              autoComplete="username"
              onChange={(e) => {
                setRegisteredData({ ...registeredData, email: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className={ubuntu.className + " text-xl"}>Password</p>
            <input
              type="password"
              className="bg-black outline-none my-borderCol rounded-md p-1"
              autoComplete="current-password"
              onChange={(e) => {
                setRegisteredData({
                  ...registeredData,
                  password: e.target.value,
                });
              }}
            />
          </div>
          {sendMail ? (
            <div className="otp-form">
              <div className="otp-container text-black flex justify-center mt-5">
                {registeredData.otp.map((_, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="number"
                        className="otp-input rem-inp-arr transition spin-button-none outline-none w-10 h-10 text-center text-lg rounded m-1"
                        maxLength={1}
                        onChange={(e) => handleOnChange(e, index)}
                        ref={(el) => (otpInputsRef.current[index] = el)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex flex-row justify-end w-full">
            <button
              className="px-5 py-2 my-borderCol rounded-lg"
              onClick={handleRegister}
            >
              <PlayIcon sendMail={sendMail} color="#9C50B6" />
            </button>
          </div>
        </div>
        {isLoading ? <BarLoader color="#36d7b7" width={310} /> : null}
        <p className={ubuntu.className}>
          already registered?
          <span
            className="cursor-pointer auth-header text-xl text-violet-600"
            onClick={() => router.push("/login")}
          >
            {" "}
            Login
          </span>{" "}
          here!
        </p>
      </div>
    </>
  );
}
function PlayIcon(props: svgproptype) {
  return (
    <div className="flex justify-center items-centre">
      {!props.sendMail? <small className="m-1">send otp</small>:null}
      <svg
      color="#9C50B6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg></div>
  );
}
