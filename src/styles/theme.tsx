// export const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   fallback: ["Helvetica", "Arial", "sans-serif"],
// });

import { useMainContext } from "@/hooks/useMainContext";
import { createTheme } from "@mui/material/styles";

let item: string | null;
if (typeof window !== "undefined") {
  // Perform localStorage action
  item = localStorage.getItem("sec");
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#009b00",
      light: "#ffff",
    },
    error: {
      main: "#ff0000",
    },
  },
});

export default theme;
