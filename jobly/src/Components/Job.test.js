import React from 'react';
import { render } from '@testing-library/react';
import Job from './Job';
import { UserProvider } from '../UserContext'; 
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; 


test('renders Job without errors', () => {
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
        <Job job={{title: 'testtitle'}}/>
      </UserProvider>
    </MemoryRouter>
  );

  // assertions here to check for specific elements or content in the rendered Job component
  const element = getByText('testtitle'); 
  expect(element).toBeInTheDocument();
});

