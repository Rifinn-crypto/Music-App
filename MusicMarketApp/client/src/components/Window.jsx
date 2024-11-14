import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Window() {
  const [updateid, setupdateid] = useState('');
  const [getid, setgetid] = useState('');
  const navigate = useNavigate();

  const handleupdate = () => {
    if (updateid) {
      navigate(`/customer/update/${updateid}`);
    } else {
      alert('Please enter a valid ID to update');
    }
  };

  const handleView = () => {
    if (getid) {
      navigate(`/customer/get/${getid}`);
    } else {
      alert('Please enter a valid ID to view');
    }
  };

  return (
    <div className="container mt-5">
      {/* Navigation tabs for Customer actions */}
      <div className="mb-3">
        <div className="btn-group" role="group">
          <button
            className="btn btn-info" // Changed from btn-primary to btn-info
            onClick={() => navigate('/customer/list')}
          >
            Go to Customer List
          </button>
          <button
            className="btn btn-secondary" // Changed from btn-success to btn-secondary
            onClick={() => navigate('/customer/post')}
          >
            Add New Customer
          </button>
        </div>
      </div>

      {/* Tab-like sections for Update and View Customer */}
      <div className="mt-4">
        <div className="card mb-4">
          <div className="card-header bg-teal text-black"> {/* Changed background to teal */}
            <h3>Update Customer by ID</h3>
          </div>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Enter ID to update"
                value={updateid}
                onChange={(e) => setupdateid(e.target.value)}
              />
              <button
                className="btn btn-warning" // Kept as btn-warning, can change to a softer tone if preferred
                onClick={handleupdate}
              >
                Update Customer
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header bg-light-gray text-dark"> {/* Changed background to light gray */}
            <h3>Get Customer by ID</h3>
          </div>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Enter ID to view"
                value={getid}
                onChange={(e) => setgetid(e.target.value)}
              />
              <button
                className="btn btn-primary" // Changed from btn-info to btn-primary for a contrasting look
                onClick={handleView}
              >
                Get Customer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Window;