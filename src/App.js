import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { current_time: new Date() }
  }

  render() {
    const element = (
      <div>
        <h1> Hello World! </h1> 
        <h2> It is {this.state.current_time.toLocaleTimeString()} </h2>
      </div>
    )
    return (element);
  }

  componentDidMount() {
    const intervalId = setInterval(this.tick, 1000); //stores intervalId to be accessed later
    this.setState({intervalId: intervalId});
  }
  
  componentWillUnmount()
  {
    // user intervalId from state to clear the interval
    clearInterval(this.state.intervalId);
  }

  tick = () => {
    this.setState( {current_time: new Date()} );
  }
}
