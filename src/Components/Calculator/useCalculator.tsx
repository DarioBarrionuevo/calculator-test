import { useState } from "react";

const useCalculator = () => {
  // States
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  //------------------------------------ FUNCTIONS ------------------------------------

  // Function for calculating the operations
  const calculate = () => {
    if (!prevValue || !operation) {
      // If there is no previous number stored or no operation selected, do nothing
      return currentValue;
    }

    const current = parseFloat(currentValue);
    const previous = parseFloat(prevValue);

    let result;
    switch (operation) {
      case "÷":
        result = previous / current;
        break;
      case "*":
        result = previous * current;
        break;
      case "-":
        result = previous - current;
        break;
      case "+":
        result = previous + current;
        break;
    }
    return result;
  };

  // Function for the equal button
  const equals = () => {
    const value = calculate();
    setCurrentValue(`${value}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  // Funtion for selecting the operation
  const pickOperation = (operation: string) => {
    if (prevValue) {
      // In second or more operation, current and previous become the result of the calculation
      const value = calculate();
      setCurrentValue(`${value}`);
      setPrevValue(`${value}`);
    } else {
      setPrevValue(currentValue); // In first operation current become previous
    }
    setOperation(operation);
    setOverwrite(true);
  };

  // Function for clearing the display and memory
  const clearDisplay = () => {
    setCurrentValue("0");
    setOperation("");
    setPrevValue("");
    setOverwrite(true);
  };

  // Function for deleting actual number in display
  const deleteDisplay = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  // Function for getting percentage
  const percentage = () => {
    const currentVal = parseFloat(currentValue);
    setCurrentValue((currentVal / 100).toString());
  };

  // Funtion for selecting and display the numbers
  const pickNumber = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return; // Prevents adding more than one zero at the begining of the display number

    if (currentValue.includes(".") && digit === ".") return; // Prevents adding more than one point in display

    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };

  return {
    currentValue,
    operation,
    equals,
    pickOperation,
    clearDisplay,
    deleteDisplay,
    percentage,
    pickNumber,
  };
};
export default useCalculator;
