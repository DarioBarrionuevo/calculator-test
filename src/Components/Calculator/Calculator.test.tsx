import { fireEvent, render, screen } from "@testing-library/react";
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
  test("Addition test", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    const output = screen.getByTestId("output");
    expect(output).toHaveTextContent("53");
  });
  test("Substraction test", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "7" }));
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "-" }));
    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "8" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    const output = screen.getByTestId("output");
    expect(output).toHaveTextContent("13");
  });
  test("Multiplication test", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "4" }));
    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "*" }));
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    const output = screen.getByTestId("output");
    expect(output).toHaveTextContent("540");
  });

  test("Division test", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "7" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "÷" }));
    fireEvent.click(screen.getByRole("button", { name: "8" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    const output = screen.getByTestId("output");
    expect(output).toHaveTextContent("9");
  });
});
