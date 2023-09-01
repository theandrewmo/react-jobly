import React from "react";
import { render } from "@testing-library/react";
import Homepage from "./Homepage";

test("renders Homepage without errors", () => {
  render(<Homepage />);
});