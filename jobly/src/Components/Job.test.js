import React from 'react';
import { render } from '@testing-library/react';
import Job from './Job';
import { UserProvider } from '../UserContext'; 
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; 

describe('Job Component', ()=> {
  let contextValue; // Declare contextValue
  
  beforeEach(() => {
    // Create a mock context value that includes a defined currentUser property
    contextValue = {
      currentUser: { username: 'happy', applications: [] },
      setCurrentUser: jest.fn(), // Mock setter function
      token: 'your-token', // Mock token value
      setToken: jest.fn(), // Mock setter function
    };
  });

  test('renders Job without errors', () => {
    const { getByText, toBeInTheDocument } = render(
      <UserProvider value={contextValue}>
        <MemoryRouter>
            <Job job={{title: 'testtitle'}}/>
        </MemoryRouter>
      </UserProvider>
    );
  
    // assertions here to check for specific elements or content in the rendered Job component
    const element = getByText('testtitle'); 
    expect(element).toBeInTheDocument();
  });  
})


