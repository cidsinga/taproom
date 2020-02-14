import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import { Switch, Route } from 'react-router-dom';

function App(){
  var allStyle = {
    backgroundColor: '#222222',
    color: '#f8f8f8',
    textAlign: 'left',
    margin: '-8px',
    textShadow: '5px 3px 5px black'
 }
  return (
    <div style={allStyle}>
      <Header/>

    </div>
  );
}

export default App;
