import React from 'react'


export default function Table({ handleClick, employeeSort }) {

  return (


    <table>
      <thead>

        <tr>
          <th><button onClick={handleClick} id="firstName">First Name</button></th>
          <th><button onClick={handleClick} id="lastName">Last Name</button></th>
          <th><button onClick={handleClick} id="position">Position</button></th>
          <th><button onClick={handleClick} id="location">Location</button></th>
        </tr>
      </thead>
      <tbody>

        {
          employeeSort.map(person => (
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





