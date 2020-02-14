import React from "react";
import { Link } from 'react-router-dom';
function Header(){
  return (
    <div>
    <Link to="/">Home</Link> | <Link to="/newkeg">Create New Keg</Link>
    <h1> The Taproom. </h1>
    <hr/>
    </div>
  );
}

export default Header;
