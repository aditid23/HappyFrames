import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const MainContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const SmMargin = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const ActionDiv = styled("div")({
  textAlign: "center",
});
