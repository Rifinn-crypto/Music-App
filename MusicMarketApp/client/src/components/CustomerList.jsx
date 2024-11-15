import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import CustomerDelete from './CustomerDelete'; 

function CustomerList()  {
  const [customers, setCustomers] = useState([]);
  const [message, setMessage] = useState(''); // Добавляем состояние для сообщения

  const fetchCustomers = async () => {
    try {
      const response = await api.get('/customer');
      setCustomers(response.data);
    } catch (error) {
      setMessage('Failed to load customers');
    }
  };

  const handleDeleteSuccess = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Customer List</h2>

      {/* Выводим сообщение в зависимости от типа */}
      {message && (
        <div className={`alert ${message.includes('Failed') ? 'alert-danger' : 'alert-success'}`} role="alert">
          {message}
        </div>
      )}

      <Link to="/customer/post" className="btn btn-success mb-3">Create New Customer</Link>
      <ul className="list-group">
        {customers.map((customer) => (
          <li key={customer.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <p><strong>Name:</strong> {customer.name}</p>
              <p><strong>Country:</strong> {customer.country}</p>
              <p><strong>Address:</strong> {customer.address}</p>
            </div>
            <div>
              <Link to={`/customer/update/${customer.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
              <CustomerDelete id={customer.id} onDeleteSuccess={handleDeleteSuccess} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
