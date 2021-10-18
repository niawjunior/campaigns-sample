import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Layout from "./Layout";
const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(email);
  };

  const onEmailChange = (email) => {
    setEmail(email);
  };
  return (
    <Layout>
      <Grid container justifyContent="center">
        <Grid item xs={4} justifyContent="center">
          <TextField
            style={{ marginTop: "1rem" }}
            fullWidth
            id="outlined-basic"
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
