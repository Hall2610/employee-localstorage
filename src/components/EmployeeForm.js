import React, { useState } from 'react';

function EmployeeForm({ setEmployees }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees((prev) => [...prev, formData]);
    setFormData({ name: '', email: '', position: '', department: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Form</h2>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="position"
        placeholder="Position"
        value={formData.position}
        onChange={handleChange}
      />
      <input
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
