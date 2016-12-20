import React, { Component } from 'react'
import Person from './Person'

class PersonList extends Component {
  render() {
    return (
      <ul>
        <Person name="Alex" />
        <Person name="Barry" />
        <Person name="Cindy" />
      </ul>
    )
  }
}

export default PersonList
