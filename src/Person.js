import React, { Component } from 'react'

class Person extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    }
  }
  // incrementing a person's score
  onIncrement() {
    this.setState(prevState => ({
      score: prevState.score + 1
    }))
  }
  // decrementing a person's score
  onDecrement() {
    // a person's score can't be negative
    if (this.state.score > 0) {
      this.setState(prevState => ({
        score: this.state.score - 1
      }))
    }
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.onIncrement.bind(this)}>+</button>
          <p>{this.state.score} - {this.props.name}</p>
          <button onClick={this.onDecrement.bind(this)}>-</button>
        </div>
      </div>
    );
  }
}

export default Person
