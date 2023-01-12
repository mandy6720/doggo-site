import * as React from "react";
import { TextField, Button, Container, Box, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Grid container>
          <Grid item marginRight={2}>
            <TextField id="name" label="name" type="text" />
          </Grid>
          <Grid item marginRight={2}>
            <TextField id="email" label="email" type="email" marginRight={2} />
          </Grid>{" "}
          <Grid item marginRight={2}>
            <TextField type="tel" label="phone" id="phone" marginRight={2} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Form;
