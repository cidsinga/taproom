import React from "react";
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import bannerPic from './bannerPic.jpg'
function Header(){

  const headerstyle = {
    textAlign: 'center',
  }

  const banner = {
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "-1",
    width: "100vw",
  }
  return (
    <div style={headerstyle}>
      <div style={banner}>
        <h1> The Vanguard Taproom </h1>
        <Link to="/">Home</Link> | <Link to="/newkeg">Create New Keg</Link>
        <img src={bannerPic}/>
      </div>

    </div>
  );
}

export default Header;
