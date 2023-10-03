import { styled, Paper } from "@mui/material";

interface Props {
  children: React.ReactNode;
}
const Calculator = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(10),
  borderRadius: 10,
}));

const CustomCalculator: React.FC<Props> = ({ children }) => {
  return <Calculator elevation={6}>{children}</Calculator>;
};

export default CustomCalculator;
