import React, { useState } from 'react';
import api from '../api/api';

function CustomerPost() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the customer data to match the expected DTO in the backend
    const customerData = {
      name,      // Maps to Name in the backend DTO
      country,   // Maps to Country in the backend DTO
      address,   // Maps to Address in the backend DTO
    };

    try {
      // Send the POST request to create a new customer
      const response = await api.post('/customer', customerData);
      
      alert('Customer created successfully');
      // Clear the form after successful submission
      setName('');
      setCountry('');
      setAddress('');
    } catch (error) {
      console.error('Error creating customer:', error);
      // Show error message, if any
      alert(`Failed to create customer: ${error.response?.data || error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country:</label>
          <input
            type="text"
            className="form-control"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}

export default CustomerPost;