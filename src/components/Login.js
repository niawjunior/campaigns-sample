import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

import Layout from "./Layout";
const Login = () => {
  const [email, setEmail] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState({
    isOpen: false,
    message: "Thank you for subscribing",
  });

  const handleSubscribe = () => {
    setSnackbarOpen({
      isOpen: true,
      message: "Thank you for subscribing",
    });
    window.location.replace(window.location.origin);
  };

  const onEmailChange = (email) => {
    setEmail(email);
  };

  const onCustomerIdChange = (customerId) => {
    setCustomerId(customerId);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen({
      isOpen: false,
    });
  };
  return (
    <Layout>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen?.isOpen}
        onClose={handleCloseSnackbar}
        message={snackbarOpen?.message}
        key={"top-right"}
        autoHideDuration={2000}
      />
      <Grid container justifyContent="center">
        <Grid item xs={4} justifyContent="center">
          <TextField
            style={{ marginTop: "1rem" }}
            fullWidth
            id="customer_id"
            label="Customer Id"
            variant="outlined"
            value={customerId}
            onChange={(e) => onCustomerIdChange(e.target.value)}
          />
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
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Login;
