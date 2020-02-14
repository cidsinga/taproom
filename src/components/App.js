import React from 'react';
import './App.css';
import Header from "./Header";
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Footer from './Footer';

function App(){
  var allStyle = {
    backgroundColor: 'rgb(48,48,48)',
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
        <Footer/>

    </div>
  );
}

export default App;
