import "../styles/global.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { black } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
