import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';
import { UserProvider } from '../UserContext'; // Import your UserProvider here
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom extensions


test('renders Profile without errors', () => {
  // Create a mock context value that matches your context structure
  const contextValue = {
    currentUser: { /* your user data here */ },
    setCurrentUser: jest.fn(), // Mock setter function
    token: 'your-token', // Mock token value
    setToken: jest.fn(), // Mock setter function
  };

  const { getByText, toBeInTheDocument } = render(
    <MemoryRouter>
      <UserProvider value={contextValue}>
        <Profile />
      </UserProvider>
    </MemoryRouter>
    
  );

  // You can add assertions here to check for specific elements or content in the rendered Profile component
  const loadingElement = getByText(/Loading/); // Replace with your actual username text
  expect(loadingElement).toBeInTheDocument();
});
