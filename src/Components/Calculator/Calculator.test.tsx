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
  // Test for adding
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
  // Test for substracting
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
  // Test for multiplying
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
  // Test for dividing
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
  // Test for percentage
  test.only("Percentage test", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "*" }));
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "%" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    const output = screen.getByTestId("output");
    expect(output).toHaveTextContent("5");
  });
  // Test for clearing
  test("Clear test", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "6" }));
    fireEvent.click(screen.getByRole("button", { name: "6" }));
    fireEvent.click(screen.getByRole("button", { name: "6" }));

    fireEvent.click(screen.getByRole("button", { name: "C" }));

    const output = screen.getByTestId("output");
    expect(output).toHaveTextContent("0");
  });
  // Test for clearing all

  test("Does AC correctly", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "8" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));

    fireEvent.click(screen.getByRole("button", { name: "AC" }));

    const output = screen.getByTestId("output");
    expect(output).toHaveTextContent("0");
  });
});
