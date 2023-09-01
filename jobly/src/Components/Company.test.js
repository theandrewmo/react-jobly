import React from "react";
import { render } from "@testing-library/react";
import Company from "./Company";

test("renders Company without errors", () => {
  render(<Company />);
});
