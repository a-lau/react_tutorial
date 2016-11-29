import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = { current_time: new Date().toLocaleTimeString() }
    setInterval(this.tick.bind(this), 1000)
  }
  render() {
    const element = (
      <div> {this.state.current_time} </div>
    )
    return (element);
  }
  tick() {
    this.setState( {current_time: new Date().toLocaleTimeString()} );
  }
}
export default App;
