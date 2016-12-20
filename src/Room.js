import React, { Component } from 'react'
import SearchBar from './SearchBar'
import PersonList from './PersonList'

class Room extends Component {
  render() {
    return (
      <div className="Room">
        <SearchBar />
        <PersonList />
      </div>
    )
  }
}

export default Room
