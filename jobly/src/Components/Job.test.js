import React from "react";
import { render } from "@testing-library/react";
import Job from "./Job";

test("renders Job without errors", () => {
  render(<Job job={{title: 'test'}}/>);
});