import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search" />
        <input type="submit" />
      </div>
    )
  }
}

export default SearchBar
