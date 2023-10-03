import { styled } from "@mui/material";

interface Props {
  children: React.ReactNode;
}
const Display = styled(`div`)(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "5em",
  overflow: "hidden",
}));

const CustomDisplay: React.FC<Props> = ({ children }) => {
  return <Display>{children}</Display>;
};

export default CustomDisplay;
