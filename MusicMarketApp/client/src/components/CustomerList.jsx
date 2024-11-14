import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import CustomerDelete from './CustomerDelete'; 

function CustomerList()  {
  const [customers, setCustomers] = useState([]);

  // Fetch the customers from the backend
  const fetchCustomers = async () => {
    try {
      const response = await api.get('/customer');
      setCustomers(response.data); // Assuming the backend returns the updated customer list
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  // Handle successful deletion by removing the deleted customer from the list
  const handleDeleteSuccess = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  // Fetch customers when the component mounts
  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Customer List</h2>
      <Link to="/customer/post" className="btn btn-success mb-3">Create New Customer</Link>
      <ul className="list-group">
        {customers.map((customer) => (
          <li key={customer.id} className="list-group-item d-flex justify-content-between align-items-center">
            {/* Updated fields */}
            <div>
              <p><strong>Name:</strong> {customer.name}</p>
              <p><strong>Country:</strong> {customer.country}</p>
              <p><strong>Address:</strong> {customer.address}</p>
            </div>
            <div>
              {/* Links and buttons for editing */}
              <Link to={`/customer/edit/${customer.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
              {/* Include the CustomerDelete component */}
              <CustomerDelete id={customer.id} onDeleteSuccess={handleDeleteSuccess} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;