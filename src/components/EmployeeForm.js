import React, { useState, useEffect } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    department: ''
  });

  const [employees, setEmployees] = useState([]);

  // Load saved employees from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('employees');
    if (saved) {
      setEmployees(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when employees state updates
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees(prev => [...prev, formData]);
    setFormData({ name: '', email: '', position: '', department: '' });
  };

  return (
    <div>
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="position" placeholder="Position" value={formData.position} onChange={handleChange} required />
        <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
        <button type="submit">Add Employee</button>
      </form>

      <h3>Stored Employees</h3>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} - {emp.email} - {emp.position} - {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeForm;


