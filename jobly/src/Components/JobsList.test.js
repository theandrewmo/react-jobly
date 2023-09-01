import React from "react";
import { render } from "@testing-library/react";
import JobsList from "./JobsList";

test("renders JobsList without errors", () => {
  render(<JobsList />);
});