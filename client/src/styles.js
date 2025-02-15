import { styled } from "@mui/system";
import { AppBar, Typography } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: "inherit",
}));

export const StyledHeading = styled(Typography)({
  color: "rgba(0,183,255,1)",
  fontSize: "2.5rem",
  fontWeight: "bold",
});

export const StyledImage = styled("img")({
  marginLeft: "15px",
  height: "60px",
});
