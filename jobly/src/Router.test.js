import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Router from './Router';
import { UserProvider } from './UserContext'; 
import '@testing-library/jest-dom/extend-expect';

describe('Router component', () => {
  let contextValue; // Declare contextValue

  beforeEach(() => {
    // Create a mock context value that includes a defined currentUser property
    contextValue = {
      currentUser: { username: 'testuser', password: 'password', firstName: 'testfirst', lastName: 'testlast', email: 'testemail@test.com' },
      setCurrentUser: jest.fn(), // Mock setter function
      token: 'your-token', // Mock token value
      setToken: jest.fn(), // Mock setter function
    };
  });

  it('renders the homepage when the path is /', () => {
    render(
      <UserProvider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <Router />
        </MemoryRouter>
      </UserProvider>
    );

    const welcomeMessage = screen.getByText(/Welcome/);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders the companies list when the path is /companies', async () => {
    render(
      <UserProvider value={contextValue}>
        <MemoryRouter initialEntries={['/companies']}>
          <Router />
        </MemoryRouter>
      </UserProvider>
    );

    const companiesList = screen.getByText(/Companies/);
    expect(companiesList).toBeInTheDocument();
  });

  it('renders company details page when the path is /companies/:handle', () => {
    render(
      <UserProvider value={contextValue}>
        <MemoryRouter initialEntries={['/companies/apple']}>
          <Router />
        </MemoryRouter>
      </UserProvider>
    );

    const company = screen.getByText('Company');
    expect(company).toBeInTheDocument();
  });

  it('renders the jobs list when the path is /jobs', () => {
    render(
      <UserProvider value={contextValue}>
        <MemoryRouter initialEntries={['/jobs']}>
          <Router />
        </MemoryRouter>
      </UserProvider>
    );

    // const jobsList = screen.getByText('Jobs List here');
    // expect(jobsList).toBeInTheDocument();
  });

  it('renders the login page when the path is /login', () => {
    render(
      <UserProvider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Router />
        </MemoryRouter>
      </UserProvider>
    );

    const loginPage = screen.getByText('Login Page');
    expect(loginPage).toBeInTheDocument();
  });

  it('renders the signup form when the path is /signup', () => {
    render(
      <UserProvider value={contextValue}>
        <MemoryRouter initialEntries={['/signup']}>
          <Router />
        </MemoryRouter>
      </UserProvider>
    );

    const signupForm = screen.getByText(/Form/);
  });

  it('renders the profile page when the path is /profile', () => {
    render(
      <UserProvider value={contextValue}>
        <MemoryRouter initialEntries={['/profile']}>
          <Router />
        </MemoryRouter>
      </UserProvider>
    );

    // const profilePage = screen.getByText('Profile Page');
    // expect(profilePage).toBeInTheDocument();
  });

  it('renders the not found page when the path does not match any route', () => {
    render(
      <UserProvider value={contextValue}>
        <MemoryRouter initialEntries={['/nonexistent']}>
          <Router />
        </MemoryRouter>
      </UserProvider>
    );

    const notFoundPage = screen.getByText('404 - Page Not Found');
    expect(notFoundPage).toBeInTheDocument();
  });
});
