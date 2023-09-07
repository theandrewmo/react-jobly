import React from 'react';
import { render } from '@testing-library/react';
import Company from './Company';
import { UserProvider } from '../UserContext'; 
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; 


test('renders Company without errors', () => {
  // Create a mock context value that matches context structure
  const contextValue = {
    currentUser: null,
    setCurrentUser: jest.fn(), // Mock setter function
    token: 'your-token', // Mock token value
    setToken: jest.fn(), // Mock setter function
  };

  const { getByText, toBeInTheDocument } = render(
    <MemoryRouter>
      <UserProvider value={contextValue}>
        <Company />
      </UserProvider>
    </MemoryRouter>
    
  );

  // // assertions here to check for specific elements or content in the rendered Company component
  // const element = getByText(); 
  // expect(element).toBeInTheDocument();
});

