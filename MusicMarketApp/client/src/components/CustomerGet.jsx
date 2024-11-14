import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';

function CustomerGet() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  const fetchCustomer = async () => {
    try {
      // Fetch customer data using the Customer ID from the URL params
      const response = await api.get(`/customer/${id}`);
      setCustomer(response.data);  // Assuming the response matches CustomerGetDto
    } catch (error) {
      console.error('Error fetching customer:', error);
      setError('Customer not found');
    }
  };

  useEffect(() => {
    fetchCustomer();  // Fetch customer data when the component mounts
  }, [id]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Customer Details</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {customer ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Customer Information</h5>
            <p><strong>ID:</strong> {customer.id}</p>
            <p><strong>Full Name:</strong> {customer.name}</p> {/* Adjusted for Name */}
            <p><strong>Country:</strong> {customer.country}</p> {/* Adjusted for Country */}
            <p><strong>Address:</strong> {customer.address}</p> {/* Adjusted for Address */}
          </div>
        </div>
      ) : error === null ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : null}
    </div>
  );
}

export default CustomerGet;