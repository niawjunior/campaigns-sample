import React from "react";
import Box from "@mui/material/Box";
import Layout from "./Layout";
import Slide from "./Slide";
import "../App.css";
function Home() {
  return (
    <Box style={{ minHeight: "100vh" }} sx={{ flexGrow: 1 }}>
      <Layout>
        <Box marginTop="5vh">
          <Slide />
        </Box>
      </Layout>
    </Box>
  );
}

export default Home;
