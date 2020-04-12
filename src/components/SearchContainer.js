import React, { Component } from "react";
import SearchForm from './SearchForm'
// import { employees } from '../utils/employees';

export class SearchContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  handleInputChange = event => {
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    // let nameToFind = this.state.search;
    this.setState({
      search: "",
      result: ['hello', 'goodby']
    })
    // esult: { employees }.filter(function (person) { return person.firstName.includes(nameToFind) })


  }

  render() {
    return (

      <header className="App-header" >
        <h1>Employee Search</h1>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
      </header>

    );
  }
}