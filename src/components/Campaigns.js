import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
const Campaigns = () => {
  const [activeSection, setActiveSection] = useState("product-detail");
  const CustomBoxStyled = styled(Box)`
    position: absolute;
    width: 70vw;
    height: 400px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 10px;

    #content-text-1 {
      font-weight: bold;
      color: #ffffff;
      text-shadow: rgb(0 0 0 / 70%) 0px 1px 2px;
    }

    #content-text-2 {
      font-size: 48px;
      color: #ffffff;
      text-shadow: rgb(0 0 0 / 70%) 0px 1px 2px;
    }

    #content-text-3 {
      font-weight: bold;
      color: #ffffff;
      text-shadow: rgb(0 0 0 / 70%) 0px 1px 2px;
    }

    #content-text-5 {
      font-weight: bold;
      color: #ffffff;
      text-shadow: rgb(0 0 0 / 70%) 0px 1px 2px;
      cursor: pointer;
    }
  `;

  const CardXApplyButton = styled(Button)`
    background-color: rgb(122, 88, 191);
    height: 50px;
    min-width: 144px;
    font-weight: bold;
    color: #ffffff;
    text-shadow: rgb(0 0 0 / 70%) 0px 1px 2px;
    &:hover {
      background-color: rgb(144, 107, 224);
    }
  `;
  return (
    <>
      <Box
        id="campaign-hero-image"
        style={{
          backgroundImage:
            "url(https://www.scb.co.th/content/dam/scb/personal-banking/loans/home-loans/images/second-hand-web.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        height="500px"
        position="relative"
        display="flex"
        alignItems="center"
      >
        <CustomBoxStyled id="custom-box">
          <p id="content-text-1">MORTGAGES</p>
          <h1 id="content-text-2">Second-Hand Home Loan</h1>
          <p id="content-text-3">
            SCB has loan solutions for any home —second-hand home, foreclosed
            property or vacant land.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "240px",
              justifyContent: "space-between",
              marginTop: "50px",
            }}
          >
            <CardXApplyButton id="content-text-4" variant="contained">
              Apply Online
            </CardXApplyButton>
            <p
              id="content-text-5"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                width="20px"
                src="https://www.scb.co.th/content/dam/scb/commons/icons/share.png"
                alt="share-icon"
              />{" "}
              Share
            </p>
          </div>
          <Box
            style={{
              display: "flex",
              width: "40vw",
              position: "absolute",
              top: "480px",
              justifyContent: "space-between",
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
        </CustomBoxStyled>
      </Box>
      <div
        style={{
          height: "2px",
          marginTop: "65px",
          borderBottom: "1px solid rgb(237, 237, 237)",
        }}
      ></div>
    </>
  );
};
export default Campaigns;
