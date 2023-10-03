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

  // Functions
  const pickOperation = (operation: string) => {
    setOperation(operation);
  };
  const pickNumber = (digit: string) => {
    // Prevents adding more than one zero at the begining of the display number
    if (currentValue[0] === "0" && digit === "0") return;
    // Prevents adding more than one point
    if (currentValue.includes(".") && digit === ".") return;

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
              pickOperation={pickOperation}
              selectedOperation={operation}
            />
            <SignButton
              operation={"C"}
              pickOperation={pickOperation}
              selectedOperation={operation}
            />
            <SignButton
              operation={"%"}
              pickOperation={pickOperation}
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
