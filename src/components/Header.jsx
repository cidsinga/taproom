import React from "react";
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import bannerPic from './bannerPic.jpg'
function Header(){

  const headerstyle = {
    textAlign: 'center',

  }

  const banner = {
    width: '100vw'
  }

  const bannerText = {
    fontSize: "84px",
    textAlign: 'center',
    color: 'rgb(240,125,0)',
        fontFamily: "Kanit",

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

    {/*  if (props.currentRouterPath === '/admin'){
        return (
          <div>
            <Link to="/">Home</Link> | <Link to="/newkeg">Create New Keg</Link>
          </div>
      );
    } else {
      return (
        <div>
        <Link to="/">Home</Link>           
        </div>
      );
    }  */}




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
