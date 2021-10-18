import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

import Layout from "./Layout";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubscribe = () => {
    console.log(email);
    setSnackbarOpen(true);
  };

  const onEmailChange = (email) => {
    setEmail(email);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  return (
    <Layout>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message="Thank you for subscribing"
        key={"top-right"}
        autoHideDuration={2000}
      />
      <Grid container justifyContent="center">
        <Grid item xs={4} justifyContent="center">
          <TextField
            style={{ marginTop: "1rem" }}
            fullWidth
            id="subscribe_email_value"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />
          <Button
            onClick={handleSubscribe}
            id="subscribe_email_button"
            fullWidth
            variant="contained"
            style={{ marginTop: "1rem" }}
            disabled={!email}
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Subscribe;
