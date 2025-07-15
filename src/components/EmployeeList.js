import React, { useContext } from 'react';
import { EmployeeContext } from '../EmployeeContext';

function EmployeeList() {
  const { employees, clearEmployees } = useContext(EmployeeContext);

  return (
    <div className="list-container">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <>
          <ul className="employee-list">
            {employees.map((emp, index) => (
              <li key={index}>
                <strong>{emp.name}</strong> — {emp.position}, {emp.department} ({emp.email})
              </li>
            ))}
          </ul>
          <button className="clear-button" onClick={clearEmployees}>
            Clear All Employees
          </button>
        </>
      )}
    </div>
  );
}

export default EmployeeList;
