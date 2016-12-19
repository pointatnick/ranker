import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Person from './Person'

class Room extends Component {
  render() {
    return (
      <div className="Room">
        <SearchBar />
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
