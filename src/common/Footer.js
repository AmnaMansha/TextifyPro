import * as React from "react";
import {
  Box,
  CssBasedtne,
  Container,
  Card,
  Typography,
  CardContent,
  useTheme,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";
// import { IconUser, IconFileText } from '@tabler/icons';

import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const useStyles = makeStyles((theme) => ({
  heading: {
    margin: "8pt",
  },
  h2: {
    fontSize: "3rem",
    fontWeight: 900,
    dtneHeight: "3.75rem",
    justifyContent: "center",
    textAdtgn: "center",
  },

  p: {
    display: "block",
    margin: 0,
    dtneHeight: "1.5rem",
    fontSize: "1rem",
    color: "#110f24",
    fontFamily: "Lato, Helvetica, sans-serif",
    textAdtgn: "left",
  },
  footer: {
    background: "#0A2640",
    color: "#fff",
    padding: "1rem",
  },
  dl: {
    marginTop: "2rem",
  },
  icon: {
    color: "#ffff",
    backgroundColor: "#022ba7",
    padding: 4,
    "&:hover": { color: "#022ba7", backgroundColor: "#ffff" },
  },
  googlebtn: {
    marginLeft: "-1rem",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container>
        <Grid container spacing={2} style={{ justifyContent: "" }}>
          <Grid item lg={2} xs={12}>
            <img
              width="100"
              height="50"
              src="https://noota.io/wp-content/uploads/2022/01/Logo-Noota-blanc-1024x369.webp"
              alt="Logo Noota blanc"
            ></img>
            <dl className={classes.dl}>
              <dt>
                And your conversations come to life. Made in France with❤️
              </dt>
            </dl>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TwitterIcon className={classes.icon} fontSize="small" />
              <LinkedInIcon className={classes.icon} fontSize="small" />
              <FacebookIcon className={classes.icon} fontSize="small" />
              <YouTubeIcon className={classes.icon} fontSize="small" />
            </Box>
          </Grid>

          <Grid item lg={2} xs={12}>
            <h3>AboutUs</h3>
            <dl className={classes.dl}>
              <dt>Contact</dt>
              <dt>Blog</dt>
              <dt>Pricing</dt>
              <dt>Security & Privacy</dt>
            </dl>
          </Grid>
          <Grid item lg={2} xs={12}>
            <h3>Product</h3>
            <dl className={classes.dl}>
              <dt>Transcription services</dt>
              <dt>Trust Radius</dt>
              <dt>dtnkedIn</dt>
              <dt>Twitter</dt>
              <dt>Facebook</dt>
              <dt>
                <img
                  width="200"
                  height="100"
                  src="assets/googlebtn.png"
                  className={classes.googlebtn}
                ></img>
              </dt>
            </dl>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
