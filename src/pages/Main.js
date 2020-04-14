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

  sortAsc = (a, b) => {
    const itema = a[this.state.sortCol].toLowerCase();
    const itemb = b[this.state.sortCol].toLowerCase();
    if (itema > itemb) {
      return 1
    }
    if (itema < itemb) {
      return -1
    }
    return 0
  }
  sortDesc = (a, b) => {
    const itema = a[this.state.sortCol].toLowerCase();
    const itemb = b[this.state.sortCol].toLowerCase();
    if (itema > itemb) {
      return -1
    }
    if (itema < itemb) {
      return 1
    }
    return 0
  }
  sortEmployees = () => {
    if (this.state.sortCol === "") {
      return;
    } else if (this.state.order) {
      let sorted = this.state.employeeSort.sort(this.sortAsc);
      this.setState({ employeeSort: sorted })
    } else {
      let sorted = this.state.employeeSort.sort(this.sortDesc);
      this.setState({ employeeSort: sorted })
    }

  }
  handleClick = event => {
    if (this.state.sortCol === event.target.id) {
      this.setState({ order: !this.state.order }, () => {
        this.sortEmployees()
      })

    } else {
      this.setState({ sortCol: event.target.id, order: true }, () => {
        this.sortEmployees()
      })

    }

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
    let nameToFind = this.state.search;
    let list = employees;
    this.setState({
      search: "",
      employeeSort: list.filter(function (person) { return person.firstName.toLowerCase().includes(nameToFind) })
    })



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

