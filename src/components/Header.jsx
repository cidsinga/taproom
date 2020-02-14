import React from "react";
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import bannerPic from './bannerPic.jpg'
function Header(){

  const headerstyle = {
    textAlign: 'center',
  }

  const banner = {
  }

  const bannerText = {
    fontSize: "84px",
    textAlign: 'center',
    color: 'rgb(240,125,0)',
  }

  const menuText = {
    textAlign: 'left'
  }
  return (
    <div style={headerstyle}>
    <div style={banner}>
    <img src={bannerPic}/>
    </div>
    <h1 style={bannerText}> The Vanguard Taproom </h1>
    <div style={menuText}>
    <Link to="/">Home</Link> | <Link to="/newkeg">Create New Keg</Link>
    <style jsx>{`
      a:visited {
        color:#f8f8f8
      }
      `}</style>
      </div>
      </div>
    );
  }

  export default Header;
