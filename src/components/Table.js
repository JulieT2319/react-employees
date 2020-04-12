import React from 'react'
import { employees } from '../utils/employees'
function Table() {
  return (


    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Position</th>
        <th>Location</th>
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

