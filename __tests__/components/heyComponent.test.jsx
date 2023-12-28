import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";

import HeyComponent from "../../src/components/heyComponent";

describe("HeyComponent", () => {
  test("renders HeyComponent with default props", () => {
    render(<HeyComponent />);
    expect(screen.getByText("Hey, welcome!")).toBeInTheDocument();

    expect(screen.getByText("Hey, welcome!"));
    expect(screen.getByText("Let's cook"));
  });

  test("renders HeyComponent with custom firstName", () => {
    render(<HeyComponent firstName="John" />);

    expect(screen.getByText("Hey John!")).toBeInTheDocument();

    expect(screen.getByText("Hey John!"));
    expect(screen.getByText("Let's cook"));
  });

  test("renders HeyComponent with fromMyAccount set to true", () => {
    render(<HeyComponent fromMyAccount={true} firstName="" />);

    expect(screen.getByText("Hey, welcome!")).toBeInTheDocument();

    expect(screen.getByText("Hey, welcome!"));
    expect(screen.queryByText("Let's cook"));
  });
});
