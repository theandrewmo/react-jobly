import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

test("renders Login without errors", () => {
  render(<Login />);
});