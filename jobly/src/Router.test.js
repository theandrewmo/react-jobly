import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import Router from './Router';
import '@testing-library/jest-dom/extend-expect';

describe('Router component', () => {
  it('renders the homepage when the path is /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Router />
      </MemoryRouter>
    );
    const welcomeMessage = screen.getByText('This is the Homepage');
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders the companies list when the path is /companies', () => {
    render(
      <MemoryRouter initialEntries={['/companies']}>
        <Router />
      </MemoryRouter>
    );
    const companiesList = screen.getByText('Companies List');
    expect(companiesList).toBeInTheDocument();
  });
  
  it('renders company details page when the path is /companies/:handle', () => {
    render(
      <MemoryRouter initialEntries={['/companies/apple']}>
        <Router />
      </MemoryRouter>
    );

    const company = screen.getByText('Company');
    expect(company).toBeInTheDocument();
  });
  
  it('renders the jobs list when the path is /jobs', () => {
    render(
      <MemoryRouter initialEntries={['/jobs']}>
        <Router />
      </MemoryRouter>
    );
    const jobsList = screen.getByText('Jobs List here');
    expect(jobsList).toBeInTheDocument();
  });

  it('renders the login page when the path is /login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Router />
      </MemoryRouter>
    );
    const loginPage = screen.getByText('Login Page');
    expect(loginPage).toBeInTheDocument();
  });

  it('renders the signup form when the path is /signup', () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <Router />
      </MemoryRouter>
    );
    const signupForm = screen.getByText('Signup Form here');
    expect(signupForm).toBeInTheDocument();
  });

  it('renders the profile page when the path is /profile', () => {
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <Router />
      </MemoryRouter>
    );
    const profilePage = screen.getByText('Profile Page');
    expect(profilePage).toBeInTheDocument();
  });

  it('renders the not found page when the path does not match any route', () => {
    render(
      <MemoryRouter initialEntries={['/nonexistent']}>
        <Router />
      </MemoryRouter>
    );
    const notFoundPage = screen.getByText('404 - Page Not Found');
    expect(notFoundPage).toBeInTheDocument();
  });
});
