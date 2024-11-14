import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Window from './components/Window';
import CustomerPost from './components/CustomerPost';
import CustomerGet from './components/CustomerGet';
import CustomerUpdate from './components/CustomerUpdate';
import CustomerList from './components/CustomerList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Window />} />
          <Route path="/customer/post" element={<CustomerPost />} />
          <Route path="/customer/get/:id" element={<CustomerGet />} />
          <Route path="/customer/update/:id" element={<CustomerUpdate />} />
          <Route path="/customer/list" element={<CustomerList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;