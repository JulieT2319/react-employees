import React, { Component } from 'react';
import Table from "../components/Table"
import { SearchContainer } from '../components/SearchContainer'
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

  render() {
    return (
      <div className="center container">
        <SearchContainer />

        <Table
          employeeSort={this.state.employeeSort}
          handleClick={this.handleClick}
        />

      </div>
    )
  }
}

