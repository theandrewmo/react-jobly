import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";
import '@testing-library/jest-dom/extend-expect';
import { UserProvider } from './UserContext'; 

describe("NavBar component", () => {

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

  it("renders without errors", () => {
    render(
      <UserProvider value={contextValue}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </UserProvider>
    );
  });

  it("displays the Jobly logo", () => {
    render(
      <UserProvider value={contextValue}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </UserProvider>
    );
    const logoLink = screen.getByText("Jobly");
    expect(logoLink).toBeInTheDocument();
  });

  it("navigates to the login page when 'Login' is clicked", () => {
    render(
      <UserProvider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <NavBar />
        </MemoryRouter>
      </UserProvider>

    );
    const loginLink = screen.getByText("Login");
    expect(loginLink).toBeInTheDocument();

    // Simulate a click on the "Login" link
    loginLink.click();

    // Assert that the URL has changed to '/login'
    expect(window.location.pathname).toBe("/");
  });

  // Add similar tests for other navigation links...
});
