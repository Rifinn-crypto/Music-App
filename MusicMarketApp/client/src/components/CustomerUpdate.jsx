import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';

function CustomerUpdate() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  const fetchCustomer = async () => {
    try {
      // Fetch customer data based on the ID from the URL
      const response = await api.get(`/customer/${id}`);
      setName(response.data.name);
      setCountry(response.data.country);
      setAddress(response.data.address);
    } catch (error) {
      console.error('Error fetching customer:', error);
      setError('Customer not found');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the updated customer data structure to match the CustomerPostDto
    const updatedCustomer = {
      name,    // Maps to Name in the backend DTO
      country, // Maps to Country in the backend DTO
      address  // Maps to Address in the backend DTO
    };

    try {
      // Send the PUT request to update the customer
      await api.put(`/customer/${id}`, updatedCustomer);
      alert('Customer updated successfully');
      navigate('/'); // Redirect to the homepage after successful update
    } catch (error) {
      console.error('Error updating customer:', error);
      alert('Failed to update customer');
    }
  };

  useEffect(() => {
    fetchCustomer(); // Fetch customer details when the component mounts or when the id changes
  }, [id]);

  return (
    <div className="container mt-5">
      <h2>Edit Customer</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {!error && (
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
          <button type="submit" className="btn btn-primary">Update Customer</button>
        </form>
      )}
    </div>
  );
};

export default CustomerUpdate;