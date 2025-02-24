import { styled } from "@mui/system";
import { Box, Grid} from "@mui/material";

// Main container for posts grid
export const MainContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row", // Change this from column to row
  flexWrap: "wrap",     // Allow posts to wrap to the next line if needed
  alignItems: "stretch",
  marginTop: "20px",
});

// For smaller margins, useful for spacing around posts
export const SmMargin = styled(Box)(({ theme }) => ({
  margin: theme?.spacing ? theme.spacing(1) : "8px", // Ensuring fallback margin
}));

// For centering the action buttons (e.g., in a post's footer)
export const ActionDiv = styled("div")({
  textAlign: "center",
});