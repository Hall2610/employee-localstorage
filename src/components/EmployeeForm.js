import React, { useState, useContext, useEffect, useRef } from 'react';
import { EmployeeContext } from '../EmployeeContext';

function EmployeeForm() {
  const { addEmployee } = useContext(EmployeeContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name,
      email,
      position,
      department,
    };

    addEmployee(newEmployee);
    setMessage('Employee added successfully!');

    setName('');
    setEmail('');
    setPosition('');
    setDepartment('');

    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="form-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
      {message && <p className="success">{message}</p>}
    </div>
  );
}

export default EmployeeForm;
