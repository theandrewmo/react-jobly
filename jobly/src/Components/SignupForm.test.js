import React from "react";
import { render } from "@testing-library/react";
import SignupForm from "./SignupForm";

test("renders SignupForm without errors", () => {
  render(<SignupForm />);
});