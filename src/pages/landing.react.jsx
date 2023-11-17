import React, { useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import Header from "../components/header/header.react";
import heroImg from "../assets/images/hero-section-arm.svg";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Landing = () => {
  const navigate = useNavigate();

  if (Cookies.get("uat")) {
    navigate("/home");
  }
  if (!Cookies.get("userID")) {
    navigate("/");
  }

  return (
    <>
      <Header />
      {/* Hero Section */}

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          flexDirection: { lg: "row", sm: "row", xs: "column-reverse" },
          position: "relative",
          backgroundColor: "transparent",
        }}
        maxWidth="false"
      >
        <Box
          className="gradient__bg_down"
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
            width: "100%",
            height: "100vh",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "100vh",
            width: "100%",
            color: "#fff",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h5"
            color="secondary"
            sx={{
              display: { lg: "flex", sm: "flex", xs: "none" },
              fontSize: "2rem",
            }}
          >
            Get Fit Together!
          </Typography>
          <Typography
            variant="h2"
            className="text-gradient"
            sx={{
              fontWeight: "bold",
              fontSize: { lg: "6rem", sm: "4rem", xs: "2rem" },
            }}
          >
            Train <br />
            Different
          </Typography>
          <Typography
            varient="h6"
            sx={{
              fontSize: { lg: "1.5rem", sm: "1rem" },
            }}
          >
            With our Gamified fitness app, it will guide you with the best
            program to help you get a healthy and ideal body.
          </Typography>
          <Link to="/login" className="link">
            <Button variant="contained" color="secondary">
              Get Started
            </Button>
          </Link>
        </Box>

        <Box
          sx={{
            width: { lg: "80%", sm: "95%", xs: "100%" },
            height: { lg: "100%", xs: "100vh" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1",
          }}
        >
          <img src={heroImg} alt="gif" width="100%" />
        </Box>
        <Typography
          variant="h5"
          color="secondary"
          sx={{
            display: { lg: "none", sm: "none", xs: "flex" },
            fontSize: "2rem",
            marginTop: { lg: "0", xs: "1rem" },
          }}
        >
          Get Fit Together!
        </Typography>
      </Container>
     
     
     
      
    </>
  );
};

export default Landing;
