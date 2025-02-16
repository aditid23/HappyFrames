import { styled } from "@mui/system";
import { Paper, Button } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme?.spacing(2) || "16px", // Safe theme usage
  margin: theme?.spacing(1, 0) || "10px 0", // Apply theme margin
  borderRadius: "10px", // Slightly rounded for a smoother look
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for better depth
}));

export const StyledForm = styled("form")({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px", // Uniform spacing
  padding: "10px",
});

export const FileInput = styled("input")({
  width: "97%",
  margin: "10px 0",
  display: "block",
  cursor: "pointer",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
});

export const SubmitButton = styled(Button)({
  marginBottom: "10px",
  width: "100%",
  minWidth: "150px", // Prevents shrinking on smaller screens
  fontWeight: "bold",
});
