import React, { useState } from "react";
import Box from "@mui/material/Box";
const GenericHomeLoan = () => {
  const [activeSection, setActiveSection] = useState("product-detail");

  return (
    <>
      <div id="generic-home-loan-campaign-container">
        <div
          className="campaign-hero-image"
          id="generic-home-loan-campaign-hero-image"
        >
          <div className="custom-box" id="generic-home-loan-custom-box">
            <p id="generic-home-loan-content-text-1" className="content-text-1">
              MORTGAGES
            </p>
            <h1
              id="generic-home-loan-content-text-2"
              className="content-text-2"
            >
              Generic Home Loan
            </h1>
            <p id="generic-home-loan-content-text-3" className="content-text-3">
              Because life starts at home. SCB is ready to help you reach for
              your dream.
            </p>
            <div className="content-button">
              <button
                className="apply-button content-text-4"
                id="generic-home-loan-content-text-4"
              >
                Explore
              </button>
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
export default GenericHomeLoan;
