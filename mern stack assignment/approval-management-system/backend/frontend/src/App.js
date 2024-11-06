import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Button, Container, Typography } from '@mui/material'; // Correct Material UI imports
import { FaSignOutAlt } from 'react-icons/fa'; // React Icons for the logout icon
import './App.css'; // Custom CSS file for any additional styling

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'black', 
      color: 'white' 
    }}>
      <Container maxWidth="sm" style={{ textAlign: 'center' }}>
        {!token ? (
          <Login
            setToken={(token) => {
              localStorage.setItem('token', token);
              setToken(token);
            }}
          />
        ) : (
          <>
            <Dashboard token={token} />
            <Typography variant="h6" style={{ color: 'white', marginTop: '20px' }}>
              You are logged in!
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<FaSignOutAlt />} // React Icon for logout
              onClick={handleLogout}
              style={{
                marginTop: '20px',
                backgroundColor: '#f44336', // Red color for logout
                fontSize: '16px',
              }}
            >
              Logout
            </Button>
          </>
        )}
      </Container>
    </div>
  );
};

export default App;
