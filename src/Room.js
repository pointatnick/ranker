import React, { Component } from 'react';

class Room extends Component {
  render() {
    return (
      <div className="Room">
        <Person />
        <Person />
        <Person />
      </div>
    )
  }
}

class Person extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    }
  }
  // incrementing a person's score
  onIncrement() {
    this.setState({score: this.state.score + 1})
  }
  // decrementing a person's score
  onDecrement() {
    // a person's score can't be negative
    if (this.state.score > 0) {
      this.setState({score: this.state.score - 1})
    }
  }
  // input a name
  setName(e) {
    this.setState({name: e.target.value})
  }
  render() {
    return (
      <div>
        <div>
          <input onChange={this.setName.bind(this)} />
          <br />
          <button onClick={this.onIncrement.bind(this)}>+</button>
          <p className="Person-score">{this.state.score}</p>
          <button onClick={this.onDecrement.bind(this)}>-</button>
        </div>
        <div className="Person-name">{this.state.name}</div>
      </div>
    );
  }
}

export default Room;
