import { Button, Grid, styled } from "@mui/material";

interface SignButtonProps {
  operation: string;
  pickOperation: (operation: string) => void;
  selectedOperation: string;
}

// Styled components
const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor:"#2f589c",
  borderColor: props.selected ? "#fff" : "#5493f7",
}));

const SignButton: React.FC<SignButtonProps> = ({
  operation,
  pickOperation,
  selectedOperation,
}) => {
  return (
    <Grid item xs={3}>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => pickOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};
export default SignButton;
