import React, {useState} from 'react';
import api from '../api/api';

function CustomerDelete({ id, onDeleteSuccess }) {
  const [message, setMessage] = useState(''); // Добавляем состояние для сообщения

  const handleDelete = async () => {
    try {
      await api.delete(`/customer/${id}`);
      onDeleteSuccess(id);
      setMessage('Customer deleted successfully!');
    } catch (error) {
      setMessage('Failed to delete customer');
    }
  };

  return (
    <div>
      {/* Выводим сообщение в зависимости от типа */}
      {message && (
        <div className={`alert ${message.includes('Failed') ? 'alert-danger' : 'alert-success'}`} role="alert">
          {message}
        </div>
      )}
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Delete
      </button>
    </div>
  );
}

export default CustomerDelete;
