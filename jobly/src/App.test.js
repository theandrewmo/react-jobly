import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'; 
import { UserProvider } from './UserContext'; 
import App from './App';

it('renders without crashing', function() {
  const div = document.createElement('div');

  // Create a mock context value that matches context structure
  const contextValue = {
    currentUser: { /* user data here */ },
    setCurrentUser: jest.fn(), // Mock setter function
    token: 'your-token', // Mock token value
    setToken: jest.fn(), // Mock setter function
  };

  ReactDOM.render(
      <UserProvider value={contextValue}>
        <App />
      </UserProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
