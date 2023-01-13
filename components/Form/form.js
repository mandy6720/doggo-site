import * as React from "react";
import { TextField, Button, Container, Box, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

const handleClick = () => console.log("hi dad)");

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
      <Container
        component="form"
        className="contact-form"
        sx={{ maxWidth: 600 }}
      >
        <Grid container>
          <Grid item marginRight={2}>
            <TextField id="name" label="name" type="text" />
          </Grid>
          <Grid item marginRight={2} marginBottom={5}>
            <TextField id="email" label="email" type="email" marginRight={2} />
          </Grid>{" "}
          <Grid item marginRight={2} marginBottom={5}>
            <TextField type="tel" label="phone" id="phone" marginRight={2} />
          </Grid>
        </Grid>
        <Grid item marginRight={2} marginBottom={5}>
          <TextField
            type="text"
            label="other"
            placeholder="anything else?"
            id="other"
            fullWidth
            multiline
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleClick}>
            click me
          </Button>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Form;
