import React from "react";
import footerPic from './tap2.jpg';


function Footer(){

  const footerStyle = {
    width: '100vw'


  }

  return (
    <div style={footerStyle}>
      <img src={footerPic}/>
    </div>

  );
}

export default Footer;
