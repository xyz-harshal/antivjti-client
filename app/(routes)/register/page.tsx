"use client";
import { useRouter } from "next/navigation"
import { BarLoader } from "react-spinners"
import Navbar from "@/app/components/navbar"
import { Ubuntu } from "next/font/google"
import { useOtp } from "@/hooks/useOpt"
const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export default function Register() {
  let router = useRouter()
  let { sendMail, recivedOTP, isLoading, error, registeredData, otpInputsRef, setRegisteredData, handleOnChange, handleRegister } = useOtp();
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 items-center justify-center mt-56">
        <div className="flex flex-col items-center my-borderCol rounded-lg shadow-lg overflow-hidden p-6 gap-6">
          <h2 className="auth-header text-5xl text-violet-600">Register</h2>
          <div className="flex flex-col items-start gap-2 ">
            <p className={ubuntu.className + " text-xl"}>Email</p>
            {recivedOTP == -1 ? <p className={ubuntu.className}>OTP incorrect Please try again</p> : null}
            {error.error ? <p className={ubuntu.className} >email already exist</p> : null}
            {error.vjti ? <p className={ubuntu.className} >vjti email only</p> : null}
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
                setRegisteredData({ ...registeredData, password: e.target.value })
              }}
            />
          </div>
          {sendMail ? (
            <div className="otp-form">
              <div className="otp-container  background-black text-white flex justify-center mt-5">
                {registeredData.otp.map((_, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="number"
                        className="bg-black my-borderCol spin-button-none outline-none w-10 h-10 text-center text-lg rounded m-1"
                        maxLength={1}
                        onChange={(e) => handleOnChange(e, index)}
                        ref={(el) => (otpInputsRef.current[index] = el)}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          ) : null}
          <div className="flex flex-row justify-center w-full">
            <button className="px-5 py-2 my-borderCol rounded-lg flex flex-row justify-center w-full bg-white text-black hover:bg-black hover:text-white" onClick={handleRegister}>
              {!sendMail ?"Send Otp":"Submit"}
            </button>
          </div>
        </div>
        {isLoading ? <BarLoader color="#36d7b7" width={310} /> : null}
        <p className={ubuntu.className}>already registered?<span className="cursor-pointer auth-header text-xl text-violet-600" onClick={() => router.push("/login")} >{" "}Login</span>{" "}here!</p>
      </div>
    </>
  );
}