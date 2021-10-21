import React from "react";
import Box from "@mui/material/Box";
import Layout from "./Layout";
import Campaigns from "./Campaigns";
import "../App.css";
function Home() {
  return (
    <Box style={{ minHeight: "100vh" }} sx={{ flexGrow: 1 }}>
      <Layout>
        <Campaigns />
      </Layout>
    </Box>
  );
}

export default Home;
