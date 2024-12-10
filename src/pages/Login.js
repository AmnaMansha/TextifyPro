import { Link as RouterLink } from "react-router-dom";
import * as React from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Card, Link, Container, Typography } from "@mui/material";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  
  padding: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {


  return (

      <RootStyle sx={{  background: "linear-gradient( #65E4A3,#0A2640)" }}>
      

       
        <Container >
          <ContentStyle>
            <Card sx={{ padding:"2rem" }}>
            <Typography variant="h4" textAlign="center" gutterBottom>
              LOGIN
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 5 }} textAlign="center">Enter your details below.</Typography>

           
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?{" "}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  Get started
                </Link>
              </Typography>
          
              <HeaderStyle>
        
        
          <Typography variant="body2" sx={{ mt: { md: -2 },ml:6 }}>
            Don’t have an account? {""}
            <Link variant="subtitle2" component={RouterLink} to="/register">
              Get started
            </Link>
          </Typography>
        

      </HeaderStyle>
      </Card>
          </ContentStyle>
        </Container>
      </RootStyle>
    
    
  );
}
