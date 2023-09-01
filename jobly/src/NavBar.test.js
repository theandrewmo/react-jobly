import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";
import '@testing-library/jest-dom/extend-expect';


describe("NavBar component", () => {
  it("renders without errors", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });

  it("displays the Jobly logo", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const logoLink = screen.getByText("Jobly");
    expect(logoLink).toBeInTheDocument();
  });

  it("navigates to the login page when 'Login' is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavBar />
      </MemoryRouter>
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
