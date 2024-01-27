"use client"
import React, { useEffect, useRef } from "react";
import { useAuth } from "@/hooks/useAuth"
import "./tailwind.css";
import { useRouter } from "next/navigation";
export default function Home() {
  let router=useRouter()
  let { authCheck } = useAuth()
  useEffect(() => {
    authCheck();
  }, []);
  return (
    <>
      <div className=" overflow-x-hidden h-full box-border relative text-center font-poppins text-gray-800 leading-normal tracking-wide">
        <section className="banner">
          <div className="banner-content">
            <h2>VJTI Socials,An Anonymous forum</h2>
            <div className="buttons">
              <button className='LPbutton' >Register</button>
              <button className='LPbutton' onClick={()=>router.push('/login')}>Login</button>
            </div>
          </div>
        </section>
      
      <div className="container">
        <div className="pan">
        <section className="panel">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
          <h2>HTML</h2>
          <p className="F-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
          
          
        </section>
        </div>
        <div className="pan">
        <section className="panel">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
          <h2>HTML</h2>
          <p className="F-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
          
          
        </section>
        </div>
        <div className="pan">
        <section className="panel">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
          <h2>HTML</h2>
          <p className="F-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
          
          
        </section>
        </div>
        <div className="pan">
        <section className="panel">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
          <h2>HTML</h2>
          <p className="F-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
          
          
        </section>
        </div>
      </div>
      
      </div>
    </>

  );
}








