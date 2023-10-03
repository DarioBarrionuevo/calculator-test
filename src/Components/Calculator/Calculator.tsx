import { Container, Grid, Button } from "@mui/material";
import useCalculator from "./useCalculator";
import SignButton from "../SignButton";
import NumberButton from "../NumberButton";
import CustomCalculator from "../StyledComponents/CustomCalculator";
import CustomDisplay from "../StyledComponents/CustomDisplay";

const Calculator: React.FC = () => {
  const {
    currentValue,
    operation,
    equals,
    pickOperation,
    clearDisplay,
    deleteDisplay,
    percentage,
    pickNumber,
  } = useCalculator();

  return (
    <Container>
      <CustomCalculator>
        <Grid container spacing={1}>
          {/* Display */}
          <Grid item xs={12}>
            <CustomDisplay>{currentValue}</CustomDisplay>
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
              operation={"*"}
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
              <Button fullWidth variant="contained" onClick={equals}>
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CustomCalculator>
    </Container>
  );
};

export default Calculator;
