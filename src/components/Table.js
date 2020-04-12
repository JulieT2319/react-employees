import React from 'react'
import { employees } from '../utils/employees'
function Table(props) {
  return (


    <table>
      <thead>

        <tr>
          <th><button>First Name</button></th>
          <th><button>Last Name</button></th>
          <th><button>Position</button></th>
          <th><button>Location</button></th>
        </tr>
      </thead>
      <tbody>

        {
          employees.map(person => (
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




export default Table

