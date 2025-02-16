import { styled } from "@mui/system";
import { Paper, Button } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme ? theme.spacing(2) : "16px",
  margin: theme ? theme.spacing(1, 0) : "10px 0",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
}));

export const StyledForm = styled("form")({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
});

export const FileInput = styled("div")({
  width: "97%",
  margin: "10px 0",
  display: "flex",
  justifyContent: "center",
});

export const SubmitButton = styled(Button)({
  marginBottom: "10px",
  width: "100%",
  minWidth: "150px",
  fontWeight: "bold",
});

export const formStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "16px"
};
