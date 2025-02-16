import { styled } from "@mui/system";
import { Card, CardMedia, CardActions, Typography } from "@mui/material";

export const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  minHeight: "300px",
  maxWidth: "400px", 
  flexGrow: 1, 
  position: "relative",
  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0,0,0,0.15)",
    transform: "translateY(-5px)",
  },
});

export const StyledMedia = styled(CardMedia)({
  width: "100%",
  minHeight: "200px", 
  objectFit: "cover",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
});

export const Overlay = styled("div")({
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
  maxWidth: "80%", 
});

export const Overlay2 = styled("div")({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
});

export const Details = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "16px",
});

export const Title = styled(Typography)({
  padding: "0 16px",
  fontWeight: "bold",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis", 
});

export const StyledCardActions = styled(CardActions)({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
});
