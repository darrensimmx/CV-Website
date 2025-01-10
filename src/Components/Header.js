// src/components/Header.js
import React from "react";
import "./Header.css"; // Optional CSS for styling
import DarrenImage01 from '../images/DarrenImage01.jpg'
import SocialMedia from './SocialMedia'


const Header = () => {
  return (
    <header className="header">
        <img src={DarrenImage01} alt="CV" className="header-image" /> 
      <div className="text-content">
      <h1>Darren's Personal CV</h1>
      <p id="email">Email: simmxdarren@gmail.com</p>
      <p>
        <SocialMedia />
      </p>
        </div>

    </header>
  );
};

export default Header;
