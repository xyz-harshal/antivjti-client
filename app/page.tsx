"use client"
import React from "react";
import "./tailwind.css";
import { useRouter } from "next/navigation";
export default function Home() {
  let router=useRouter()
  return (
    <>
      <div>
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
        <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
          
          <p className="F-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis 
          </p>
          
          
        </section>
        </div>
        <div className="pan">
        <section className="panel">
                <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
          
         <p className="F-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis 
          </p>
          
          
        </section>
        </div>
        <div className="pan">
        <section className="panel">
                <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
          
         <p className="F-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis 
          </p>
          
          
        </section>
        </div>
        <div className="pan">
        <section className="panel">
                <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
          
         <p className="F-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis 
          </p>
          
          
        </section>
        </div>
      </div>
      
      </div>
    </>

  );
}