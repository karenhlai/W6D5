import React from 'react';

class Clock extends React.Component {
  constructor () {
    super();
    this.state = { time: `${new Date().toLocaleTimeString()}` };
    this.interval = this.tick.bind(this); //bind in constructor 
  }

  render () {
    return (
      <h1>Tick: { this.state.time } </h1>
    );
  };

  tick () {
    this.setState({ time: `${new Date().toLocaleTimeString()}` } ); //cannot render objects (as children)
  };


  componentDidMount() {
    this.id = window.setInterval(this.interval, 1000); 
    // return this.id;
  };

  componentWillUnmount() {
    window.clearInterval(this.id); //remove the setInterval from the browser
  }
}

export default Clock;