import React, { Component } from 'react'
import { employees } from '../utils/employees'

export default class Table extends Component {
  state = {
    employeeSort: employees,
    sortCol: "",
    order: true
  }

  // sortEmployees = () => {

  //   let list = this.state.employeeSort
  //   function compareAsc(a, b) {
  //     if (a.firstName < b.firstName) {
  //       return -1;
  //     }
  //     if (a.firstName > b.firstName) {
  //       return 1;
  //     }

  //     return 0
  //   }
  //   function compareDes(a, b) {
  //     if (a.firstName < b.firstName) {
  //       return 1;
  //     }
  //     if (a.firstName > b.firstName) {
  //       return -1;
  //     }

  //     return 0
  //   }
  //   if (this.state.sortCol === "") {
  //     this.setState({ employeeSort: employees })
  //   } else {
  //     if (this.state.order) {
  //       let sorted = list.sort(compareAsc())
  //       this.setState({ employeeSort: sorted })
  //     } else {
  //       let sorted = list.sort(compareDes())
  //       this.setState({ employeeSort: sorted })
  //     }
  //   }


  // }

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


      <table>
        <thead>

          <tr>
            <th><button onClick={this.handleClick} id="firstName">First Name</button></th>
            <th><button onClick={this.handleClick} id="lastName">Last Name</button></th>
            <th><button onClick={this.handleClick} id="position">Position</button></th>
            <th><button onClick={this.handleClick} id="location">Location</button></th>
          </tr>
        </thead>
        <tbody>

          {
            this.state.employeeSort.map(person => (
              <tr key={person.empid}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.position}</td>
                <td>{person.location}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    )
  }


}


