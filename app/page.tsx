"use client"

import React, { useEffect, useRef } from "react";

import { useAuth } from "@/hooks/useAuth"

import "./tailwind.css";

export default function Home() {
  
  const { authCheck } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);

  
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
          <button className='LPbutton'>Get Started</button>
          <button className='LPbutton'>Login</button>
          </div>
        </div>
      </section>
      <div ref={containerRef} className="container">
        <section className="panel">
          <div className="pan">
          <h2>HTML</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
        </section>
        <section className="panel">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          <div className="pan">
          <h2>HTML</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
          
          </div>
        </section>
        <section className="panel">
          <div className="pan">
          <h2>HTML</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
        </section>
        <section className="panel">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          <div className="pan">
          <h2>HTML</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
          
          </div>
        </section>
        
      </div>
      <section className="footer">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your email" />

          <textarea rows={6} placeholder="Message" />
          <button>SUBMIT</button>
        </form>
      </section>
      </div>
    </>
  );
}







