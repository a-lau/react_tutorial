import React from 'react'
//import Greeting from './Greetings'

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
    this.Greeting = this.Greeting.bind(this);
    this.LoginButton = this.LoginButton.bind(this);
    this.LogoutButton = this.LogoutButton.bind(this);
  }

  UserGreeting() {
    return <h1>Welcome back!</h1>;
  }

  GuestGreeting() {
    return <h1>Please sign up.</h1>;
  }

  Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return ( this.UserGreeting() );
    }
    return ( this.GuestGreeting() );
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  
  LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }

  LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = (<this.LogoutButton onClick={this.handleLogoutClick} />) ;
    } else {
      button = (<this.LoginButton onClick={this.handleLoginClick} />) ;
    }

    return (
      <div>
        <this.Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
