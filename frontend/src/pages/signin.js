import React, { useState } from 'react'
import log from '../img/log.svg';
import register from '../img/register.svg';
import '../styles/signin.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const Siginin = () => {
    const [name,setname]=useState("");
    const history = useNavigate();
    const [pass,setpass]=useState("");
    const signup=(ev)=>{
      ev.preventDefault();
      toast.success("Account added successfully");
    }
    const handlelogin=(ev)=>{
      ev.preventDefault();
      if(name==="harishv@gmail.com" && pass==="1234"){
        toast.success("Login Successful");
        history('/sdash');
      }
      else if(name==="hodit@gmail.com" && pass==="1234"){
        toast.success("Login Successful");
        history('/adash');
      }
      else{
        toast.warning("Login Invalid");
      }
    }
    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");
    
        const handleSignUpClick = () => {
          container.classList.add("sign-up-mode");
        };
    
        const handleSignInClick = () => {
          container.classList.remove("sign-up-mode");
        };
    
        sign_up_btn.addEventListener("click", handleSignUpClick);
        sign_in_btn.addEventListener("click", handleSignInClick);
    
       
        return () => {
          sign_up_btn.removeEventListener("click", handleSignUpClick);
          sign_in_btn.removeEventListener("click", handleSignInClick);
        }
      }, []);
  return (
    <div class="login">
        <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" value={name} onChange={(ev)=>setname(ev.target.value)}/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={pass} onChange={(ev)=>setpass(ev.target.value)}/>
            </div>
            <input type="submit" value="Login" class="btn solid" onClick={handlelogin}/>
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
                           <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
          
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Sign up" onClick={signup}/>
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
           
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
          
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3 style={{fontSize:40}}>𝑺𝒚𝒏𝒄𝑴𝒂𝒕𝒆</h3>
            <p>
            
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={log} class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3 style={{fontSize:40}}>𝑺𝒚𝒏𝒄𝑴𝒂𝒕𝒆</h3>
            <p>
             
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={register} class="image" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}
export default Siginin;