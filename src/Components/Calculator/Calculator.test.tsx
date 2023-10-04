import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";
import "@testing-library/jest-dom";

describe("calculator tests", () => {
  // Test for render
  test("renders calculator", () => {
    render(<Calculator />);

    const output = screen.getByTestId("output");
    expect(output).toHaveTextContent("0");

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(19);
    for (let i = 0; i < 9; i++) {
      expect(screen.getByRole("button", { name: `${i}` })).toBeInTheDocument();
    }

    expect(screen.getByRole("button", { name: "AC" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "C" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "*" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "÷" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "." })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "=" })).toBeInTheDocument();
  });
});
