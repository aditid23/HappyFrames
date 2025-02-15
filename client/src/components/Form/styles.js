import { styled } from "@mui/system";
import { Paper, TextField, Button } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledForm = styled("form")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const FileInput = styled("input")({
  width: "97%",
  margin: "10px 0",
});

export const SubmitButton = styled(Button)({
  marginBottom: "10px",
});
