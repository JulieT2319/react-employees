import React from 'react'
import { employees } from '../utils/employees'
function Table(props) {
  return (


    <table>
      <tr>
        <th><button>First Name</button></th>
        <th><button>Last Name</button></th>
        <th><button>Position</button></th>
        <th><button>Location</button></th>
      </tr>
      {
        employees.map(person => (
          <tr>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.position}</td>
            <td>{person.location}</td>
          </tr>
        ))
      }
    </table>

  )

}




export default Table

