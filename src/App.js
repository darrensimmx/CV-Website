//import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./Components/Header";
import AboutMe from './Components/AboutMe';
import Tabs from './Components/Tabs';



function App() {
  return (
    <>
      <div className="App">
          <Header />
          
      </div>
      <div className="body">
        <AboutMe />
        <Tabs />
      </div>
    </>
  );
}

export default App;
