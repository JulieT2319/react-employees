import React, { Component } from 'react';
import Table from "../components/Table"
import SearchContainer from '../components/SearchContainer'
import { employees } from '../utils/employees'

export default class Main extends Component {

  state = {
    employeeSort: employees,
    sortCol: "",
    order: true,
    search: ""
  }

  handleClick = event => {
    if (this.state.sortCol === event.target.id) {
      this.setState({ order: !this.state.order })
    } else {
      this.setState({ sortCol: event.target.id, order: true });
    }
    // this.sortEmployees()
  }

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
      <div className="center container">
        <SearchContainer
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <Table
          employeeSort={this.state.employeeSort}
          handleClick={this.handleClick}
        />

      </div>
    )
  }
}

