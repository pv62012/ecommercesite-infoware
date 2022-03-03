import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ProductAddButton = styled(Button)(({ theme }) => ({
  color: "#f5f5f5",
  backgroundColor: "#658e75 !important",
  padding: "8px 20px",
  fontSize: "20px",
  fontWeight: "600",
  border: "3px solid",
  borderColor: "#658e75 !important",
  display: "flex",
  alignItems: "center",
  marginTop: "30px",
  transition: "all 0.3s ease-in",
  [theme.breakpoints.down("md")]: {
    padding: "5px 12px",
    fontSize: "12px",
    marginTop: "30px",
  },
  "&:hover": {
    backgroundColor: "#fafafa !important ",
    color: "#658e75",
  },
  "&:active": {
    backgroundColor: "#c89666",
  },
}));
