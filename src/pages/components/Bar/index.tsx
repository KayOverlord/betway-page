import { useMainContext } from "@/hooks/useMainContext";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useMemo } from "react";
import LightTabs from "../Tabs";

const Bar = () => {
  const theme = useTheme();
  const { setCurrentTheme, currentTheme } = useMainContext();
  useMemo(() => (theme.palette.secondary.main = currentTheme), [currentTheme]);
  return (
    <div>
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        style={{
          width: "100vw",
          backgroundColor: "black",
          paddingTop: 6,
          paddingBottom: 6,
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <div style={{ flexGrow: 1 }}>
            <Image
              src={
                "https://cdn.betway.co.za/images/Shared/sprite/site/Betway_White.png"
              }
              alt="Picture of the logo"
              width={110}
              height={30}
            />
          </div>

          <div>
            <Button
              color="secondary"
              variant="contained"
              sx={{
                my: 1,
                mx: 1,
                width: "110px",
                fontWeight: "bold",
                borderRadius: "2px",
              }}
            >
              Sign up
            </Button>
            <Button
              variant="outlined"
              sx={{
                my: 1,
                mx: 1,
                width: "110px",
                backgroundColor: `${theme.palette.secondary.light}`,
                color: `${theme.palette.secondary.main}`,
                borderColor: `${theme.palette.secondary.main}`,
                borderWidth: "1px",
                fontWeight: "bold",
                borderRadius: "2px",
              }}
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <LightTabs />
    </div>
  );
};

export default Bar;
