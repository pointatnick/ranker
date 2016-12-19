import React, { Component } from 'react'
import Person from './Person'

class Room extends Component {
  render() {
    return (
      <div className="Room">
        <Person name="Alex"/>
        <br />
        <Person name="Barry"/>
        <br />
        <Person name="Cindy"/>
      </div>
    )
  }
}

export default Room
