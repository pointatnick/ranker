import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search" />
        <button>Submit</button>
      </div>
    )
  }
}

export default SearchBar
