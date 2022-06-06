import React from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  return (
    <tbody>
      <tr>
        <td>James</td>
        <td>Project Manager</td>
      </tr>
      <tr>
        <td>Evan</td>
        <td>Tester</td>
      </tr>
      <tr>
        <td>Pam</td>
        <td>Junior Developer</td>
      </tr>
      <tr>
        <td>Sam</td>
        <td>Senior Developer</td>
      </tr>
    </tbody>
  )
}

function Employee(props) {
  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  );
}

export default Employee;
