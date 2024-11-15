import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';

function CustomerUpdate() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedCustomer = {
      name,
      country,
      address
    };

    try {
      await api.put(`/customer/${id}`, updatedCustomer);
      setMessage('Customer updated successfully!');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      setMessage(`Failed to update customer: ${error.response?.data || error.message}`);
    }
  };

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await api.get(`/customer/${id}`);
        setName(response.data.name);
        setCountry(response.data.country);
        setAddress(response.data.address);
      } catch (error) {
        setMessage('Customer not found');
      }
    };
    fetchCustomer();
  }, [id]);

  return (
    <div className="container mt-5">
      <h2>Edit Customer</h2>

      {message && (
        <div className={`alert ${message.includes('Failed') ? 'alert-danger' : 'alert-success'}`} role="alert">
          {message}
        </div>
      )}

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
    </div>
  );
}

export default CustomerUpdate;
