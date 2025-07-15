import React, { createContext, useState, useEffect } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(() => {
    const storedEmployees = localStorage.getItem('employees');
    return storedEmployees ? JSON.parse(storedEmployees) : [];
  });

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const clearEmployees = () => {
    setEmployees([]);
    localStorage.removeItem('employees');
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, clearEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};
