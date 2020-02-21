import React from 'react';
import './App.css';
import Header from "./Header";
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';
// import NewKegControl from './NewKegControl';
import Error404 from './Error404';
import Footer from './Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
  };
  this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
}

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
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
        <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
        <Route path='/newkeg' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
        <Route component={Error404} />
        </Switch>

      </div>
    );
  }
}


export default App;
