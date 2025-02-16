import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column", // Ensures posts appear in a column layout
  alignItems: "center",
});

export const SmMargin = styled(Box)(({ theme }) => ({
  margin: theme.spacing ? theme.spacing(1) : "8px", // Fallback margin if theme is undefined
}));

export const ActionDiv = styled("div")({
  textAlign: "center",
});
