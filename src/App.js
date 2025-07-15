import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { EmployeeProvider } from './EmployeeContext';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import './App.css';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <Link to="/">Add Employee</Link>
            <Link to="/list">Employee List</Link>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<EmployeeForm />} />
              <Route path="/list" element={<EmployeeList />} />
            </Routes>
          </main>
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
