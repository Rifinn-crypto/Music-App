import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

function CustomerPost() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customerData = {
      name,
      country,
      address
    };

    try {
      await api.post('/customer', customerData);
      setMessage('Customer created successfully!');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error('Error creating customer:', error);
      setMessage(`Failed to create customer: ${error.response?.data || error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Customer</h2>
      
      {/* Выводим сообщение в зависимости от типа */}
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
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}

export default CustomerPost;
