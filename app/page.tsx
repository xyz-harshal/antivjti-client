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
            <h2>ANTI VJTI,AN ANONYMOUS FORUM</h2>
            <div className="buttons">
              <button className='LPbutton' onClick={()=>router.push('/register')} >Register</button>
              <button className='LPbutton' onClick={()=>router.push('/login')}>Login</button>
            </div>
          </div>
        </section>
      
      <div className="container">
        <div className="pan">
        <section className="panel">
        <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
          
          <p className="F-content">
          Unveil your thoughts freely on ANTI VJTI, the anonymous platform , exclusively for authentic and open conversations among vjtians.
          </p>
          
        </section>
        </div>
        <div className="pan">
        <section className="panel">
                <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
          
         <p className="F-content">
         Explore unfiltered opinions, ideas, and creativity from across departments and disciplines; all under one roof on Antivjti.
          </p>
          
        </section>
        </div>
        <div className="pan">
        <section className="panel">
                <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
         <p className="F-content">
            Stay updated on trending topics, events, and initiatives happening around your school through real-time updates and notifications on Antivjti.
          </p>
        </section>
        </div>
        <div className="pan">
        <section className="panel">
                <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" />
          
          
         <p className="F-content">
         Connect with friends and strangers alike over relatable memes and humorous anecdotes on Antivjti.
          </p>
          
        </section>
        </div>
      </div>
      
      </div>
    </>

  );
}