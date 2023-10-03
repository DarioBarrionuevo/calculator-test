import { Container, Grid, Paper, styled } from "@mui/material";
import { useState } from "react";

// Styled components
const Calculator = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
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

  // Functions
  const pickOperation = (operation: string) => {
    setOperation(operation);
  };
  const pickNumber = (digit: string) => {
    setCurrentValue(digit);
  };

  return (
    <Container>
      <Calculator elevation={6}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Display>{currentValue}</Display>
          </Grid>
        </Grid>
      </Calculator>
    </Container>
  );
}

export default App;
