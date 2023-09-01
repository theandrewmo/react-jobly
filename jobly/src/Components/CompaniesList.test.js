import React from "react";
import { render } from "@testing-library/react";
import CompaniesList from "./CompaniesList";

test("renders CompaniesList without errors", () => {
  render(<CompaniesList />);
});

