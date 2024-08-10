import React from 'react'
import { useEffect } from 'react';
import '../styles/dashboard.css';
import Avatar from "../img/avatar.jpg";
import { useState } from 'react';
import Application from '../components/Application';
export const ADashboard = () => {
    useEffect(() => {
        // Selecting the sidebar and buttons
        const sidebar = document.querySelector(".sidebar");
        const sidebarOpenBtn = document.querySelector("#sidebar-open");
        const sidebarCloseBtn = document.querySelector("#sidebar-close");
        const sidebarLockBtn = document.querySelector("#lock-icon");
    
        // Function to toggle the lock state of the sidebar
        const toggleLock = () => {
          sidebar.classList.toggle("locked");
          // If the sidebar is not locked
          if (!sidebar.classList.contains("locked")) {
            sidebar.classList.add("hoverable");
            sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
          } else {
            sidebar.classList.remove("hoverable");
            sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
          }
        };
    
        // Function to hide the sidebar when the mouse leaves
        const hideSidebar = () => {
          if (sidebar.classList.contains("hoverable")) {
            sidebar.classList.add("close");
          }
        };
    
        // Function to show the sidebar when the mouse enter
        const showSidebar = () => {
          if (sidebar.classList.contains("hoverable")) {
            sidebar.classList.remove("close");
          }
        };
    
        // Function to show and hide the sidebar
        const toggleSidebar = () => {
          sidebar.classList.toggle("close");
        };
    
        // If the window width is less than 800px, close the sidebar and remove hoverability and lock
        if (window.innerWidth < 800) {
          sidebar.classList.add("close");
          sidebar.classList.remove("locked");
          sidebar.classList.remove("hoverable");
        }
    
        // Adding event listeners to buttons and sidebar for the corresponding actions
        sidebarLockBtn.addEventListener("click", toggleLock);
        sidebar.addEventListener("mouseleave", hideSidebar);
        sidebar.addEventListener("mouseenter", showSidebar);
        sidebarOpenBtn.addEventListener("click", toggleSidebar);
        sidebarCloseBtn.addEventListener("click", toggleSidebar);
    
        // Cleanup function to remove event listeners when the component unmounts
        return () => {
          sidebarLockBtn.removeEventListener("click", toggleLock);
          sidebar.removeEventListener("mouseleave", hideSidebar);
          sidebar.removeEventListener("mouseenter", showSidebar);
          sidebarOpenBtn.removeEventListener("click", toggleSidebar);
          sidebarCloseBtn.removeEventListener("click", toggleSidebar);
        };
      }, []);
  return (
    <div class="dashboard">
<nav class="sidebar locked">
      <div class="logo_items flex">
        <span class="nav_image">
          <b style={{fontSize:50}}>♾️</b>
        </span>
        <span class="logo_name"  style={{fontSize:30}}>𝑺𝒚𝒏𝒄𝑴𝒂𝒕𝒆</span>
        <i class="b" id="lock-icon" title="Unlock Sidebar"></i>
        <i class="bx bx-x" id="sidebar-close"></i>
      </div>
      <div class="sidebar_profile flex">
          <span class="nav_image">
            <img src={Avatar} alt="logo_img" />
          </span>
          <div class="data_text">
            <span class="name">Mrs.Sherin Banu</span>
            
          </div>
        </div>
      <div class="menu_container">
 
        <div class="menu_items">
          <ul class="menu_item">
         
            <li class="item">
              <a href="#" class="link flex">
                <i class="bx bx-home-alt"></i>
                <span>Overview</span>
              </a>
            </li>
            <li class="item">
              <a href="#" class="link flex">
                <i class="bx bx-grid-alt"></i>
                <span>Timetable</span>
              </a>
            </li>
          </ul>
          <ul class="menu_item">
            <li class="item">
              <a href="#" class="link flex">
                <i class="bx bxs-magic-wand"></i>
                <span>Department</span>
              </a>
            </li>
            <li class="item">
              <a href="#" class="link flex">
                <i class="bx bx-folder"></i>
                <span>Applications</span>
              </a>
            </li>
      
          </ul>
          <ul class="menu_item">
     
      
            <li class="item">
              <a href="#" class="link flex">
                <i class="bx bx-cog"></i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
   
      <i class="b" id="sidebar-open"></i>
    <div style={{marginLeft:100,marginTop:70}}>
       
    </div>
    <Application/>
          
 
            
        </div>
    
  )
}
export default ADashboard;
