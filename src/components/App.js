import React from 'react';
import './App.css';
import Header from "./Header";
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

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
    <Switch>
    <Route exact path='/' component={KegList} />
    <Route path='/newkeg' component={NewKegForm} />
    <Route component={Error404} />
    </Switch>

    </div>
  );
}

export default App;
