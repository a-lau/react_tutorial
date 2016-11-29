import React from 'react';
import './App.css';

export default App;

class App extends React.Component {
  constructor() {
    super()
    this.state = { current_time: new Date().toLocaleTimeString() };
    setInterval(this.tick.bind(this), 1000);
  };
  element = (
      <div> this.setState( current_time: {new Date().toLocaleTimeString()} ) </div>
    );
  render() {
    return (element);
  };
  tick() {
    this.setState( element /*current_time: {new Date().toLocaleTimeString()} */);
  };
  //setInterval(tick, 1000);
};

