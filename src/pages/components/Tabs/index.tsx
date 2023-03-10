import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMemo, useState } from "react";
import { useMainContext } from "@/hooks/useMainContext";
import theme from "@/styles/theme";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const a11yProps = (index: number) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const LightTabs = () => {
  const [value, setValue] = useState(0);
  const { setCurrentTheme, currentTheme } = useMainContext();
  useMemo(() => (theme.palette.secondary.main = currentTheme), [currentTheme]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (newValue > 0) {
      setCurrentTheme(`hsla(${~~(360 * Math.random())},70%,70%,0.8)`);
    } else {
      setCurrentTheme("#009b00");
    }

    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        style={{
          width: "100vw",
          backgroundColor: "#080808d1",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}
        >
          <Tab
            sx={{ fontWeight: "bold", fontSize: "12px" }}
            label="sports"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontWeight: "bold", fontSize: "12px" }}
            label="live & real"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontWeight: "bold", fontSize: "12px" }}
            label="casino"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ fontWeight: "bold", fontSize: "12px" }}
            label="esports"
            {...a11yProps(3)}
          />
          <Tab
            sx={{ fontWeight: "bold", fontSize: "12px" }}
            label="vegas"
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default LightTabs;
