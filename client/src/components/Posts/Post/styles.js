import { styled } from "@mui/system";
import { Card, CardMedia, CardActions, Typography } from "@mui/material";

// Responsive and dynamic-height Card
export const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "auto", // Allow content-based height
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

// Image/media section
export const StyledMedia = styled(CardMedia)({
  width: "100%",
  minHeight: "200px",
  objectFit: "cover",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
});

// Top-left overlay (creator and time)
export const Overlay = styled("div")({
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
  maxWidth: "80%",
});

// Top-right overlay (edit button)
export const Overlay2 = styled("div")({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
});

// Tags section
export const Details = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "16px",
});

// Post title
export const Title = styled(Typography)({
  padding: "0 16px",
  fontWeight: "bold",
  whiteSpace: "normal", // allow wrapping
  wordWrap: "break-word",
});

// Button area
export const StyledCardActions = styled(CardActions)({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
});

// Message/body of post
export const Message = styled(Typography)({
  fontSize: "16px",
  padding: "0 16px",
  whiteSpace: "pre-wrap", // keeps formatting & wraps
  wordWrap: "break-word",
});
