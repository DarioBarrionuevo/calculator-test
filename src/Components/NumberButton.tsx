import { Button, Grid } from "@mui/material";

interface NumberButtonProps {
  digit: string;
  enterDigit: (digit: string) => void;
  xs?: number;
}

 const NumberButton: React.FC<NumberButtonProps> = ({
  digit,
  enterDigit,
  xs = 3,
}) => {
  return (
    <Grid item xs={xs}>
      <Button fullWidth variant="outlined" onClick={() => enterDigit(digit)}>
        {digit}
      </Button>
    </Grid>
  );
};
export default NumberButton