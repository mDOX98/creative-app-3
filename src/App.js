import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";



class PlayerInfo {
  constructor(props) {
    this.info = {
      name: "",
      hp: 0,
      hpmax: 0,
      armor: 0,
      dmgBonus: 0,
      dmgMin: 0,
    };
  }

  RollDmg() {
    let dmg = Math.floor(Math.random() * this.info.dmgBonus) + this.info.dmgMin;

    return dmg;
  }

  TakeDmg(amount) {
    let dmg = amount - this.info.armor;
    if (dmg < 0) dmg = 0;
    //console.log(this.info.name + " takes " + dmg);
    this.info.hp -= dmg;
  }

  randomStats(){
    this.info = {
      hp: Math.floor(Math.random() * 10) + 10+1,
      armor: Math.floor(Math.random() * 3)+1,
      dmgBonus: Math.floor(Math.random() * 6) + 1,
      dmgMin: Math.floor(Math.random() * 6)+1
    }
    this.info.hpmax = this.info.hp
  }
}

class PlayerDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      hp: 0,
      hpmax: 0,
      armor: 0,
      dmgBonus: 0,
      dmgMin: 0,
    };

    this.state.name = props.player.name;
    this.state.hp = props.player.hp;
    this.state.hpmax = props.player.hpmax;
    this.state.armor = props.player.armor;
    this.state.dmgBonus = props.player.dmgBonus;
    this.state.dmgMin = props.player.dmgMin;
  }

  updateInfo(obj) {
    this.setState(obj);
  }

  render() {

    if (this.props.player.info.hp <= 0) {

      let skull =  ["██▀███  ▓█████   ██████ ▄▄▄█████▓    ██▓ ███▄    █     ██▓███  ▓█████ ▄▄▄       ▄████▄  ▓█████",
      "▓██ ▒ ██▒▓█   ▀ ▒██    ▒ ▓  ██▒ ▓▒   ▓██▒ ██ ▀█   █    ▓██░  ██▒▓█   ▀▒████▄    ▒██▀ ▀█  ▓█   ▀",
      "▓██ ░▄█ ▒▒███   ░ ▓██▄   ▒ ▓██░ ▒░   ▒██▒▓██  ▀█ ██▒   ▓██░ ██▓▒▒███  ▒██  ▀█▄  ▒▓█    ▄ ▒███   ",
      "▒██▀▀█▄  ▒▓█  ▄   ▒   ██▒░ ▓██▓ ░    ░██░▓██▒  ▐▌██▒   ▒██▄█▓▒ ▒▒▓█  ▄░██▄▄▄▄██ ▒▓▓▄ ▄██▒▒▓█  ▄ ",
      "░██▓ ▒██▒░▒████▒▒██████▒▒  ▒██▒ ░    ░██░▒██░   ▓██░   ▒██▒ ░  ░░▒████▒▓█   ▓██▒▒ ▓███▀ ░░▒████▒",
      "░ ▒▓ ░▒▓░░░ ▒░ ░▒ ▒▓▒ ▒ ░  ▒ ░░      ░▓  ░ ▒░   ▒ ▒    ▒▓▒░ ░  ░░░ ▒░ ░▒▒   ▓▒█░░ ░▒ ▒  ░░░ ▒░ ░",
      "  ░▒ ░ ▒░ ░ ░  ░░ ░▒  ░ ░    ░        ▒ ░░ ░░   ░ ▒░   ░▒ ░      ░ ░  ░ ▒   ▒▒ ░  ░  ▒    ░ ░  ░",
      "  ░░   ░    ░   ░  ░  ░    ░          ▒ ░   ░   ░ ░    ░░          ░    ░   ▒   ░           ░   ",
      "   ░        ░  ░      ░               ░           ░                ░  ░     ░  ░░ ░         ░  ░",
      "                                                                                ░               "];

      const skullTag = skull.map((data, index) => {
        return <p key={index} className="death">{data}</p>
      });
      

      let skull2 = <p >{""+
     " ██▀███  ▓█████   ██████ ▄▄▄█████▓    ██▓ ███▄    █     ██▓███  ▓█████ ▄▄▄       ▄████▄  ▓█████ \n"+
     "▓██ ▒ ██▒▓█   ▀ ▒██    ▒ ▓  ██▒ ▓▒   ▓██▒ ██ ▀█   █    ▓██░  ██▒▓█   ▀▒████▄    ▒██▀ ▀█  ▓█   ▀ \n"+
     "▓██ ░▄█ ▒▒███   ░ ▓██▄   ▒ ▓██░ ▒░   ▒██▒▓██  ▀█ ██▒   ▓██░ ██▓▒▒███  ▒██  ▀█▄  ▒▓█    ▄ ▒███   \n"+
     "▒██▀▀█▄  ▒▓█  ▄   ▒   ██▒░ ▓██▓ ░    ░██░▓██▒  ▐▌██▒   ▒██▄█▓▒ ▒▒▓█  ▄░██▄▄▄▄██ ▒▓▓▄ ▄██▒▒▓█  ▄ \n"+
     "░██▓ ▒██▒░▒████▒▒██████▒▒  ▒██▒ ░    ░██░▒██░   ▓██░   ▒██▒ ░  ░░▒████▒▓█   ▓██▒▒ ▓███▀ ░░▒████▒\n"+
     "░ ▒▓ ░▒▓░░░ ▒░ ░▒ ▒▓▒ ▒ ░  ▒ ░░      ░▓  ░ ▒░   ▒ ▒    ▒▓▒░ ░  ░░░ ▒░ ░▒▒   ▓▒█░░ ░▒ ▒  ░░░ ▒░ ░\n"+
     "  ░▒ ░ ▒░ ░ ░  ░░ ░▒  ░ ░    ░        ▒ ░░ ░░   ░ ▒░   ░▒ ░      ░ ░  ░ ▒   ▒▒ ░  ░  ▒    ░ ░  ░\n"+
     "  ░░   ░    ░   ░  ░  ░    ░          ▒ ░   ░   ░ ░    ░░          ░    ░   ▒   ░           ░   \n"+
     "   ░        ░  ░      ░               ░           ░                ░  ░     ░  ░░ ░         ░  ░\n"+
     "                                                                                ░               \n"}</p>



      return (
        <>
        <div className="death">
        <h3 >{this.props.player.info.name + " has died..."}</h3>
        {skull2}
        </div>
        
        </>
      );
    }
    return (
      <div className="player">
        <h1>{this.props.player.info.name}</h1>
        <h3>
          hp:
          <span className="hp">
            {" " +
              this.props.player.info.hp +
              "/" +
              this.props.player.info.hpmax}
          </span>
        </h3>
        <h3>
          dmg:
          <span className="dmg">
            {" " +
              this.props.player.info.dmgMin +
              "-" +
              (this.props.player.info.dmgMin +
                this.props.player.info.dmgBonus -
                1)}
          </span>
        </h3>
        <h3>
          armor:
          <span className="armor">{" " + this.props.player.info.armor}</span>
        </h3>
      </div>
    );
  }
}

class Headerbar extends React.Component{
  constructor(props){
    super(props)
    this.state={activePage: props.activePage, page0fnc:props.page0fnc, page1fnc:props.page1fnc, page2fnc:props.page2fnc}
  }

  render(){
    if(this.props.activePage === 0){
    return(
    <>
    <div className="navbar">
      <ul>
        <li onClick={this.props.page0fnc} className="active"><p>Game</p></li>
        <li onClick={this.props.page1fnc} className=""><p>Store</p></li>
        <li onClick={this.props.page2fnc} className=""><p>About</p></li>
      </ul>
    </div>
    
    </>);}
    if(this.props.activePage === 1){
      return(
      <>
      <div className="navbar">
        <ul>
          <li onClick={this.props.page0fnc} className=""><p>Game</p></li>
          <li onClick={this.props.page1fnc} className="active"><p>Store</p></li>
          <li onClick={this.props.page2fnc} className=""><p>About</p></li>
        </ul>
      </div>
      
      </>);}
      if(this.props.activePage === 2){
        return(
        <>
        <div className="navbar">
          <ul>
            <li onClick={this.props.page0fnc} className=""><p>Game</p></li>
            <li onClick={this.props.page1fnc} className=""><p>Store</p></li>
            <li onClick={this.props.page2fnc} className="active"><p>About</p></li>
          </ul>
        </div>
        
        </>);}
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    let p0 = new PlayerInfo();
    p0.randomStats();

    let p1 = new PlayerInfo();
    p1.randomStats();

    this.players = [p0, p1];
    this.state = {};
    this.state.p0inf = p0;
    this.state.p1inf = p1;
    this.state.page = 0;
    this.Turn = this.Turn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.page0 = this.page0.bind(this);
    this.page1 = this.page1.bind(this);
    this.page2 = this.page2.bind(this);
    this.Reset = this.Reset.bind(this);
    this.state.gameinplay = true;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  page0(event){
    this.setState({page: 0});
    
  }
  page1(event){
    this.setState({page: 1});
    
  }
  page2(event){
    this.setState({page: 2});
   
  }
  Reset(event){
    this.players[0].randomStats();
    this.players[1].randomStats();
    this.setState({gameinplay:true})
  }

  Turn(event) {
    if(this.players[0].info.hp > 0 && this.players[1].info.hp > 0){
    this.players[0].TakeDmg(this.players[1].RollDmg());
    this.players[1].TakeDmg(this.players[0].RollDmg());

    //console.log(this.players[0]);

    this.setState({ p0inf: this.players[0] });
    this.setState({ p1inf: this.players[0] });
    if(this.players[0].info.hp <= 0 || this.players[1].info.hp <= 0){
      this.setState({gameinplay:false})
    }
    } else {
      this.setState({gameinplay:false})
    }
    //console.log("PRESSED")
  }

  render() {
    console.log(this.state.page)
    let title = ""+
  "  ▄██████▄     ▄████████ ███    █▄  ███▄▄▄▄       ███      ▄█          ▄████████     ███             ▄████████    ▄████████    ▄████████ ███▄▄▄▄      ▄████████ \n"+
  "  ███    ███   ███    ███ ███    ███ ███▀▀▀██▄ ▀█████████▄ ███         ███    ███ ▀█████████▄        ███    ███   ███    ███   ███    ███ ███▀▀▀██▄   ███    ███\n"+ 
  "  ███    █▀    ███    ███ ███    ███ ███   ███    ▀███▀▀██ ███         ███    █▀     ▀███▀▀██        ███    ███   ███    ███   ███    █▀  ███   ███   ███    ███\n"+ 
  " ▄███          ███    ███ ███    ███ ███   ███     ███   ▀ ███        ▄███▄▄▄         ███   ▀        ███    ███  ▄███▄▄▄▄██▀  ▄███▄▄▄     ███   ███   ███    ███\n"+ 
  "▀▀███ ████▄  ▀███████████ ███    ███ ███   ███     ███     ███       ▀▀███▀▀▀         ███          ▀███████████ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀     ███   ███ ▀███████████\n"+ 
  "  ███    ███   ███    ███ ███    ███ ███   ███     ███     ███         ███    █▄      ███            ███    ███ ▀███████████   ███    █▄  ███   ███   ███    ███\n"+ 
  "  ███    ███   ███    ███ ███    ███ ███   ███     ███     ███▌    ▄   ███    ███     ███            ███    ███   ███    ███   ███    ███ ███   ███   ███    ███\n"+ 
  "  ████████▀    ███    █▀  ████████▀   ▀█   █▀     ▄████▀   █████▄▄██   ██████████    ▄████▀          ███    █▀    ███    ███   ██████████  ▀█   █▀    ███    █▀ \n"+ 
  "                                                           ▀                                                      ███    ███                                    \n"; 
  
  let btntext = ""+
"  ▄████████     ███         ███        ▄████████  ▄████████    ▄█   ▄█▄ \n"+
" ███    ███ ▀█████████▄ ▀█████████▄   ███    ███ ███    ███   ███ ▄███▀ \n"+
" ███    ███    ▀███▀▀██    ▀███▀▀██   ███    ███ ███    █▀    ███▐██▀   \n"+
" ███    ███     ███   ▀     ███   ▀   ███    ███ ███         ▄█████▀    \n"+
"▀███████████     ███         ███     ▀███████████ ███        ▀▀█████▄   \n"+ 
" ███    ███     ███         ███       ███    ███ ███    █▄    ███▐██▄   \n"+
" ███    ███     ███         ███       ███    ███ ███    ███   ███ ▀███▄ \n"+
" ███    █▀     ▄████▀      ▄████▀     ███    █▀  ████████▀    ███   ▀█▀ \n"+
"                                                              ▀         ";

let reset=""+
"▄████████    ▄████████    ▄████████    ▄████████     ███      \n"+
"███    ███   ███    ███   ███    ███   ███    ███ ▀█████████▄ \n"+
"███    ███   ███    █▀    ███    █▀    ███    █▀     ▀███▀▀██ \n"+
"▄███▄▄▄▄██▀  ▄███▄▄▄       ███         ▄███▄▄▄         ███   ▀\n"+ 
"▀▀███▀▀▀▀▀   ▀▀███▀▀▀     ▀███████████ ▀▀███▀▀▀         ███   \n"+  
"▀███████████   ███    █▄           ███   ███    █▄      ███   \n"+  
"███    ███   ███    ███    ▄█    ███   ███    ███     ███     \n"+
"███    ███   ██████████  ▄████████▀    ██████████    ▄████▀   \n"+
"███    ███                                                    \n";


 let aboutTitle = ""+
" ▄████████ ▀█████████▄   ▄██████▄  ███    █▄      ███     \n"+
" ███    ███   ███    ███ ███    ███ ███    ███ ▀█████████▄\n"+ 
" ███    ███   ███    ███ ███    ███ ███    ███    ▀███▀▀██\n"+ 
" ███    ███  ▄███▄▄▄██▀  ███    ███ ███    ███     ███   ▀\n"+ 
"▀███████████ ▀▀███▀▀▀██▄  ███    ███ ███    ███     ███   \n"+  
" ███    ███   ███    ██▄ ███    ███ ███    ███     ███    \n"+ 
" ███    ███   ███    ███ ███    ███ ███    ███     ███    \n"+ 
" ███    █▀  ▄█████████▀   ▀██████▀  ████████▀     ▄████▀  \n";

let storeTitle = ""+
"▄████████     ███      ▄██████▄     ▄████████    ▄████████ \n"+
"███    ███ ▀█████████▄ ███    ███   ███    ███   ███    ███ \n"+
"███    █▀     ▀███▀▀██ ███    ███   ███    ███   ███    █▀  \n"+
"███            ███   ▀ ███    ███  ▄███▄▄▄▄██▀  ▄███▄▄▄     \n"+
"▀███████████     ███     ███    ███ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀   \n"+  
"       ███     ███     ███    ███ ▀███████████   ███    █▄  \n"+
" ▄█    ███     ███     ███    ███   ███    ███   ███    ███ \n"+
"▄████████▀     ▄████▀    ▀██████▀    ███    ███   ██████████\n"+ 
"                                    ███    ███              \n";

                                                                                                            
   if (this.state.page === 0){
    if(this.state.gameinplay){
    return (
      <>
      <Headerbar activePage={this.state.page} page0fnc={this.page0} page1fnc={this.page1} page2fnc={this.page2}/>
      <div className="wrapper"><h3 className="death">{title}</h3></div>
      <div className="wrapper">
        <PlayerDisplay player={this.players[0]} />
      </div>
      <div className="wrapper">
        <PlayerDisplay player={this.players[1]} />
        </div>
        <div className="player">
        <form onSubmit={this.handleSubmit}>
          <p onClick={this.Turn} className="roll-button">{btntext}</p>
        </form>
        </div>
      </>
    );}else{
      return(
      <>
      <Headerbar activePage={this.state.page} page0fnc={this.page0} page1fnc={this.page1} page2fnc={this.page2}/>
      <div className="wrapper"><h3 className="death">{title}</h3></div>
      <div className="wrapper">
        <PlayerDisplay player={this.players[0]} />
      </div>
      <div className="wrapper">
        <PlayerDisplay player={this.players[1]} />
        </div>
        <div className="player">
        <form onSubmit={this.handleSubmit}>
          <p onClick={this.Reset} className="roll-button">{reset}</p>
        </form>
        </div>
      </>
    );}}
    if (this.state.page === 1){
      return (
        <>
        <Headerbar activePage={this.state.page} page0fnc={this.page0} page1fnc={this.page1} page2fnc={this.page2}/>
        <div className="wrapper"><h3 className="death">{storeTitle}</h3></div>
        <div className="text-block">
          <h3>This is a Store! (W.I.P.)</h3>
          <h3>Sword - $1</h3>
          <h3>Bow - $2</h3>
          <h3>Shield - $3</h3>
          <h3>Armor - $4</h3>
        </div>
        
        </>
      );
    }
    if (this.state.page === 2){
      return (
        <>
        <Headerbar activePage={this.state.page} page0fnc={this.page0} page1fnc={this.page1} page2fnc={this.page2}/>
        <div className="wrapper"><h3 className="death">{aboutTitle}</h3></div>
        <div className="text-block">
          <h3>This is a sick proof of concept for a react app.  Took me longer then expected, but that's okay.  Here's the github link:</h3>
          <h3></h3>
        </div>
        
        </>
      );
    }
  
  }
}

function App() {
  return (
    <>
      <Game />
    </>
  );
}

export default App;
