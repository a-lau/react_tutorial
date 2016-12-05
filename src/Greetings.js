import React from 'react'

export default class Greetings extends React.Component {
  
  render() {
    const isLoggedIn = this.props.isLoggedIn
    if (isLoggedIn) {
      return ( this.UserGreeting() );
    }
    return ( this.GuestGreeting() );
  }

  UserGreeting() {
    return <h1>Welcome back!</h1>;
  }

  GuestGreeting() {
    return <h1>Please sign up.</h1>;
  }

}
