import * as React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { MainProvider, useMainContext } from "@/hooks/useMainContext";
import createEmotionCache from "@/utils/createEmotionCache";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <MainProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MainProvider>
    </CacheProvider>
  );
};
export default App;
