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
        score: prevState.score - 1
      }))
    }
  }
  reorder(){
    console.log('needs reordering')
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.onIncrement.bind(this)}>+</button>
          <p onChange={this.reorder}>{this.state.score} - {this.props.name}</p>
          <button onClick={this.onDecrement.bind(this)}>-</button>
        </div>
      </div>
    )
  }
}

export default Person
