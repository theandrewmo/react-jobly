import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from '../UserContext';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom'; 


test('Login renders without crashing', () => {
  // Create a mock context value that matches context structure
  const contextValue = {
    currentUser: { /* user data here */ },
    setCurrentUser: jest.fn(), // Mock setter function
    token: 'your-token', // Mock token value
    setToken: jest.fn(), // Mock setter function
  };

  // Wrap test component with the UserProvider and provide the mock context value
  const { container } = render(
    <MemoryRouter>
      <UserProvider value={contextValue}>
          <Login />
        </UserProvider>
    </MemoryRouter>
    
  );

  // test assertions here...
});
