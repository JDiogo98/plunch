import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";

import AuthInput from "../../src/components/AuthInput";

describe("Testing LogInPage", () => {
  const handleChange = jest.fn();
  it("LogInPage render Properly", () => {
    render(<AuthInput text="Password:" onChange={handleChange} />);
    const text = screen.getByText("Password:");
    expect(text).toHaveTextContent("Password:");
  });
});
