import "../styles/global.scss";
import { AppBar } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppBar position="static" />
      <Component {...pageProps} />
    </>
  );
}
