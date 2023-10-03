import { Container, Paper, styled } from "@mui/material";

const Calculator = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(10),
  borderRadius: 10,
}));
function App() {
  return (
    <Container>
      <Calculator elevation={6}>Testing Material-UI</Calculator>
    </Container>
  );
}

export default App;
