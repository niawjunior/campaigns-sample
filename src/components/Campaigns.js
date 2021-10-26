import React, { useState } from "react";
import Box from "@mui/material/Box";
const Campaigns = () => {
  const [activeSection, setActiveSection] = useState("product-detail");

  return (
    <>
      <div id="campaign-container">
        <div class="campaign-hero-image" id="campaign-hero-image">
          <div class="custom-box" id="custom-box">
            <p id="content-text-1">MORTGAGES</p>
            <h1 id="content-text-2">Second-Hand Home Loan</h1>
            <p id="content-text-3">
              SCB has loan solutions for any home —second-hand home, foreclosed
              property or vacant land.
            </p>
            <div class="content-button">
              <button
                class="apply-button"
                id="content-text-4"
                variant="contained"
              >
                Apply Online
              </button>
              <p class="content-text-5" id="content-text-5">
                <img
                  width="20px"
                  src="https://www.scb.co.th/content/dam/scb/commons/icons/share.png"
                  alt="share-icon"
                />{" "}
                Share
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "70vw", display: "flex", justifyContent: "center" }}>
        <Box
          style={{
            display: "flex",
            width: "40vw",
            top: "480px",
            justifyContent: "space-between",
            marginTop: "1.5rem",
          }}
        >
          <span
            onClick={() => setActiveSection("product-detail")}
            style={{
              color: "rgb(122, 88, 191)",
              textDecoration: "none black",
              cursor: "pointer",
            }}
          >
            Product Detail
            {activeSection === "product-detail" && (
              <div
                style={{
                  width: "100px",
                  height: "2px",
                  backgroundColor: "rgb(122, 88, 191)",
                  marginTop: "27px",
                }}
              ></div>
            )}
          </span>
          <span
            onClick={() => setActiveSection("document-required")}
            style={{
              color: "rgb(118, 118, 118)",
              textDecoration: "none black",
              cursor: "pointer",
            }}
          >
            Qualification and Document Required
            {activeSection === "document-required" && (
              <div
                style={{
                  width: "270px",
                  height: "2px",
                  backgroundColor: "rgb(122, 88, 191)",
                  marginTop: "27px",
                }}
              ></div>
            )}
          </span>
          <span
            onClick={() => setActiveSection("contact-us")}
            style={{
              color: "rgb(118, 118, 118)",
              textDecoration: "none black",
              cursor: "pointer",
            }}
          >
            Contact Us
            {activeSection === "contact-us" && (
              <div
                style={{
                  width: "80px",
                  height: "2px",
                  backgroundColor: "rgb(122, 88, 191)",
                  marginTop: "27px",
                }}
              ></div>
            )}
          </span>
        </Box>
      </div>
      <div
        style={{
          height: "2px",
          marginTop: "-2px",
          borderBottom: "1px solid rgb(237, 237, 237)",
        }}
      ></div>
    </>
  );
};
export default Campaigns;
