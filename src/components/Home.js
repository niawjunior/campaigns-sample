import React from "react";
import Box from "@mui/material/Box";
import Layout from "./Layout";
import GenericHomeLoan from "./GenericHomeLoan";
// import SecondHandHomeLoan from "./SecondHandHomeLoan";
// import HomeRefinance from "./HomeRefinance";
import "../App.css";
function Home() {
  return (
    <Box style={{ minHeight: "100vh" }} sx={{ flexGrow: 1 }}>
      <Layout>
        <GenericHomeLoan />
        {/* <SecondHandHomeLoan /> */}
        {/* <HomeRefinance /> */}
      </Layout>
    </Box>
  );
}

export default Home;
