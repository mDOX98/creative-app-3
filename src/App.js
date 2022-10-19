import logo from './logo.svg';
import './App.css';
import React , { Component } from "react"

class PlayerDisplay extends React.Component{
    constructor(props){
      super(props);

      this.state = {
      name:"Player 1",
      hp:10,
      hpmax:10,
      armor:3,
      dmgRange: 6,
      dmgMin: 1};

      this.updateInfo = this.updateInfo.bind(this);
      
    }

    updateInfo(obj){
      this.setState(obj);
    }

    render(){
      return (
        <>
        <h1>{this.state.name}</h1>
        <h3>{"hp: " + this.state.hp + "/" + this.state.hpmax}</h3>
        <h3>{"dmg: " + this.state.dmgMin + "-" + (this.state.dmgMin+this.state.dmgRange-1)}</h3>
        <h3>{"armor: " + this.state.armor}</h3>
        </>
      );
    }
}


function App() {
  return (
    <PlayerDisplay/>
  );
}

export default App;
