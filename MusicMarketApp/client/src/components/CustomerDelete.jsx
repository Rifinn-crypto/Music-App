import React from 'react';
import api from '../api/api';

function CustomerDelete({ id, onDeleteSuccess }) {
  const handleDelete = async () => {
    try {
      await api.delete(`/customer/${id}`);
      onDeleteSuccess(id); // Notify the parent component (CustomerList) to remove the customer from the list
    } catch (error) {
      console.error('Error deleting customer:', error);
      alert('Failed to delete customer');
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger btn-sm">
      Delete
    </button>
  );
};

export default CustomerDelete;