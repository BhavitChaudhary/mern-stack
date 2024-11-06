import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ token }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data.message);
      } catch (err) {
        setMessage('Error fetching dashboard');
      }
    };

    if (token) {
      fetchDashboard();
    }
  }, [token]);

  return (
    <div>
      <h2>Dashboard</h2>
      {message ? <p>{message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
