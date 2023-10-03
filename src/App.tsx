import { Container, Grid, Paper, styled, Button } from "@mui/material";
import { useState } from "react";
import SignButton from "./Components/SignButton";
import NumberButton from "./Components/NumberButton";

// Styled components
const Calculator = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(10),
  borderRadius: 10,
}));
const Display = styled(`div`)(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "5em",
  overflow: "hidden",
}));

function App() {
  // States
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  //----------------- FUNCTIONS ---------------------

  // Funtion for selecting the operation
  const pickOperation = (operation: string) => {
    setPrevValue(currentValue); //When we click in a operation the next number will override the actual display number
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

  return (
    <Container>
      <Calculator elevation={6}>
        <Grid container spacing={1}>
          {/* Display */}
          <Grid item xs={12}>
            <Display>{currentValue}</Display>
          </Grid>
          {/* First row */}
          <Grid item container columnSpacing={1}>
            <SignButton
              operation={"AC"}
              pickOperation={clearDisplay}
              selectedOperation={operation}
            />
            <SignButton
              operation={"C"}
              pickOperation={deleteDisplay}
              selectedOperation={operation}
            />
            <SignButton
              operation={"%"}
              pickOperation={percentage}
              selectedOperation={operation}
            />
            <SignButton
              operation={"÷"}
              pickOperation={pickOperation}
              selectedOperation={operation}
            />
          </Grid>
          {/* Second row */}
          <Grid item container columnSpacing={1}>
            <NumberButton digit={"7"} enterDigit={pickNumber} />
            <NumberButton digit={"8"} enterDigit={pickNumber} />
            <NumberButton digit={"9"} enterDigit={pickNumber} />
            <SignButton
              operation={"x"}
              pickOperation={pickOperation}
              selectedOperation={operation}
            />
          </Grid>
          {/* Third row */}
          <Grid item container columnSpacing={1}>
            <NumberButton digit={"4"} enterDigit={pickNumber} />
            <NumberButton digit={"5"} enterDigit={pickNumber} />
            <NumberButton digit={"6"} enterDigit={pickNumber} />
            <SignButton
              operation={"-"}
              pickOperation={pickOperation}
              selectedOperation={operation}
            />
          </Grid>
          {/* Fourth row */}
          <Grid item container columnSpacing={1}>
            <NumberButton digit={"1"} enterDigit={pickNumber} />
            <NumberButton digit={"2"} enterDigit={pickNumber} />
            <NumberButton digit={"3"} enterDigit={pickNumber} />
            <SignButton
              operation={"+"}
              pickOperation={pickOperation}
              selectedOperation={operation}
            />
          </Grid>
          {/* Fifth row */}
          <Grid item container columnSpacing={1}>
            <NumberButton xs={6} digit={"0"} enterDigit={pickNumber} />
            <NumberButton digit={"."} enterDigit={pickNumber} />
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Calculator>
    </Container>
  );
}

export default App;
