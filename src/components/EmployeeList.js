import React from 'react';

function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <ul>
          {employees.map((emp, index) => (
            <li key={index}>
              {emp.name} – {emp.email} – {emp.position} – {emp.department}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;
