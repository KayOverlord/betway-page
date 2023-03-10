import { useMainContext } from "@/hooks/useMainContext";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useMemo, useState } from "react";
import LightTabs from "../Tabs";

const BottomBar = () => {
  const theme = useTheme();
  const { setCurrentTheme, currentTheme } = useMainContext();
  useMemo(() => (theme.palette.secondary.main = currentTheme), [currentTheme]);
  const [joined, setJoined] = useState(false);

  //
  const onChange = () => {
    setJoined(true);
  };
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
        width: "100vw",
        height: "25vh",
        backgroundColor: joined
          ? `hsla(${~~(360 * Math.random())},70%,70%,0.8)`
          : "#080808d1",
      }}
    >
      <Toolbar
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "center",
          height: "100%",
        }}
      >
        {joined ? (
          <div>
            <Typography textAlign={"center"} fontSize={"4rem"}>
              Thank you for joining!
            </Typography>
          </div>
        ) : (
          <div
            style={{
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mb: 1,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                letterSpacing: "2px",
                fontSize: "0.8rem",
                fontWeight: 200,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              SPORTS NEW CUSTOMER OFFER
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mb: 1,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                letterSpacing: "2px",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Get up to £10 in Free Bets
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              onClick={onChange}
              sx={{
                my: 1,
                mx: 1,
                width: { xs: "90vw", md: "40vw", lg: "30vw" },
                fontWeight: "bold",
                borderRadius: "2px",
                padding: "8px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              Join Now
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default BottomBar;
