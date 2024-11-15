import * as React from "react";
import { Link as RouterLink, Link } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Cards from "../common/Cards";
import Carasouel from "../Component/Carasouel";
import Slider from "../Component/Slider";
import { Box, Container, Card, Button, Grid } from "@mui/material";
import Counter from "../Component/Counter";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  section1: {
    // background: "#f0f4fc",
    background: " linear-gradient(to right bottom, #f0f4fc 60%, #ffff 10%)",

    padding: "4rem",
    marginTop: "-4rem",
  },

  h3: {
    fontSize: "2rem",
    fontWeight: 900,
    lineHeight: " 2.75rem",
  },

  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#0A2640",
    alignContent: "center",
    marginTop: "3rem",
  },
  heading_center: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#0A2640",
    textAlign: "center",
    marginTop: "3rem",
  },
  sologan: {
    fontSize: "16px",
    marginTop: "3rem",
    marginLeft: "3px",
    lineHeight: "2rem",
    color: "black",
  },
  headerimg: {
    width: "250px",
    ["@media (min-width:780px)"]: {
      width: "400px",
    },
  },
  list_item: {
    fontSize: "20px",
    color: "#0A2640",
  },
  req: {
    borderRadius: "24rem",
    backgroundColor: "#ffff",

    padding: "1.5rem",
    marginTop: "1rem",
    width: 500,
    width: "250px",
    ["@media (min-width:780px)"]: {
      width: "400px",
    },
  },
  req_div: {
    background: " linear-gradient(to right top, #f0f4fc 70%, #ffff 10%)",

    padding: "4rem",
  },
  section2: {
    backgroundColor: "#0A2640",
  },
  section3: {
    backgroundColor: "#D3FFEB",
    borderRadius: "2rem",
    margin: "1rem",
  },
}));

export default function Landing() {
  const classes = useStyles();
  const solutions = [
    {
      heading: "Transcription",
      desp: "Convert your audio files to text in over 70 languages within minutes.",
      src: "assets/signal.gif",
    },
    {
      heading: "Live dictation",
      desp: "Capture live exchanges, annotate and add screenshots.",
      src: "assets/audio.gif",
    },
    {
      heading: "Subtitling",
      desp: "Automatic subtitle generator Customize the style and the subtitles of your video.",
      src: "assets/cc.gif",
    },
    {
      heading: "Analyser",
      desp: "Automatic topic tagger, keywords, questions and more!",
      src: "assets/document.gif",
    },
  ];
  const requirements = [
    {
      req: "Sentiment analysis per topic and question",
    },
    {
      req: "Automatic detection and annotation of topics in your transcript",
    },
    {
      req: "Labeling of responses to open-ended questions in your studies",
    },
    {
      req: "Statistical analysis on one or more audio, video and CSV files",
    },
  ];
  return (
    <div>
      <Header />
      <Grid container className={classes.section1}>
        <Grid item lg={6} xs={12}>
          <div>
            <h2 className={classes.heading}>
              Transcribe & Analyze Your Focus Group
            </h2>
            <p className={classes.sologan}>
              No more note-taking, Noota assists you on all your conversations.
            </p>
            <ul>
              <li className={classes.list_item}>
                <b>Transcribe</b> in over 70 languages.
              </li>
              <li className={classes.list_item}>
                <b>Record </b>and annotate your meetings live.{" "}
              </li>
              <li className={classes.list_item}>
                <b>Detect</b> topics with the Noota analyzer.
              </li>
            </ul>
            <Link
              component={RouterLink}
              to="/bookdemo"
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{
                  background: "#022ba7",
                  color: "#ffff",
                  borderRadius: "24px",
                  fontWeight: "bold",
                  padding: "8px 20px",
                  marginLeft: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                Try it for free
              </Button>
            </Link>
          </div>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Box
            sx={{
              marginLeft: { lg: "8rem", xs: "0rem" },
              height: 500,
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Box
              sx={{
                marginBottom: "2rem",
                padding: "1px",
                width: { lg: "610", xs: "320" },
              }}
            >
              <img
                src="assets/list.gif"
                alt="editorimage"
                className={classes.headerimg}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Carasouel />
      <br></br>
      <Box sx={{ p: 4 }}>
        <h1 className={classes.heading}>Our Solutions designed for you</h1>
      </Box>

      <Box
        sx={{
          display: { lg: "flex" },

          padding: "5rem",
          textAlign: "center",
        }}
      >
        {solutions.map((item) => {
          return (
            <Box>
              <img src={item.src} alt="gifimg" width="100" />
              <h1>{item.heading}</h1>
              <p>{item.desp}</p>
              <Button
                style={{
                  background: "#022ba7",
                  color: "#ffff",
                  borderRadius: "24px",
                  fontWeight: "bold",
                  padding: "8px 20px",
                  marginLeft: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                Read more
              </Button>
            </Box>
          );
        })}
      </Box>
      <Grid
        container
        padding="4rem"
        justifyContent="center"
        className={classes.req_div}
      >
        <Grid item lg={6}>
          <h3 style={{ color: "#022ba7" }}>And what if we went further ?</h3>
          {requirements.map((item) => {
            return <Box className={classes.req}>{item.req}</Box>;
          })}
          <Box sx={{ display: { lg: "flex" }, gap: 10, mt: 5, ml: 5 }}>
            <Button
              sx={{
                borderRadius: "24rem",
                backgroundColor: "#0A2640",
                color: "#ffff",
                padding: 1,
                fontWeight: "bold",
                width: 260,
                "&:hover": { color: "#022ba7" },
              }}
            >
              Contact us for Analysis
            </Button>
            <Button
              sx={{
                borderRadius: "24rem",
                border: "2px solid #0A2640",
                color: "#0A2640",
                width: 150,
              }}
            >
              Viewmore
            </Button>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <img src="assets/img1.png" alt="img1" width="380" />
        </Grid>
      </Grid>
      <Grid
        container
        padding="4rem"
        justifyContent="center"
        className={classes.section2}
      >
        <Grid item lg={6}>
          <h1 style={{ color: "#ffff" }}>Secure & Private</h1>
          <p style={{ color: "#ffff", fontSize: 24 }}>
            Our servers are located in France and Belgium and respect GDPR.
          </p>
          <p style={{ color: "#ffff", fontSize: 24 }}>
            Yourdata is doubly encrypted.
          </p>

          <Button
            sx={{
              border: "2px solid #ffff",
              borderRadius: "24rem",
              color: "#ffff",
              width: 150,
              padding: 1,
              "&:hover": { color: "#022ba7", backgroundColor: "#ffff" },
            }}
          >
            Find Out more{" "}
          </Button>
        </Grid>
        <Grid item lg={6}>
          <img
            src="assets/laptop.png"
            alt="laptop"
            width="300"
            style={{ marginLeft: "3rem" }}
          />
        </Grid>
      </Grid>
      <br />
      <div className={classes.section3}>
        <Grid container>
          <Grid item lg={6} justifyContent="center">
            <div
              style={{
                padding: "3rem",
              }}
            >
              <h1>Welcome to the Community</h1>
              <p>
                Our customers like the simplicity of our transcription tool. We
                remain fully available to help you implement analysis tools
                custom made for your application.
              </p>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Slider />
          </Grid>
        </Grid>
      </div>
      <Grid>
        <h1 className={classes.heading_center}>Noota it is,</h1>
        <Counter />
      </Grid>
      <Box sx={{ p: 5 }}>
        <h1 className={classes.heading}>Our Plans and Prices</h1>
      </Box>

      <Box
        sx={{
          display: { lg: "flex" },
          gap: 10,
          m: 2,

          padding: "1rem",
          justifyContent: "center",
        }}
      >
        <Cards
          title={"Solo"}
          sologan={"For indiviual"}
          amount={"15$/user/month"}
          color={"#0A2640"}
          time={"5h per month"}
          rate={"10$ per additional hour"}
          btn={"#022BA7"}
          bg={"#ffff"}
          txt={"#0A2640"}
          btncolor={"#ffff"}
          ht={"299"}
        />
        <Cards
          title={"Pro"}
          sologan={"For Proffesionals"}
          amount={"30$/user/month"}
          color={"#0A2640"}
          time={"25h per month"}
          rate={"5$ per additional hour"}
          btn={"#ffff"}
          bg={"#022BA7"}
          txt={"#ffff"}
          btncolor={"#0A2640"}
          ht={"599"}
        />
        <Cards
          title={"Entetprise"}
          sologan={"For teams ans businesses"}
          amount={"**$/user/month"}
          color={"#0A2640"}
          time={"unlimites transcription"}
          rate={"Min 5 users"}
          btn={"#022BA7"}
          bg={"#0A2640"}
          txt={"#ffff"}
          btncolor={"#ffff"}
          ht={"299"}
        />
      </Box>
      <h1 className={classes.heading_center}>Our Partners</h1>
      <Box
        sx={{
          display: { lg: "flex" },
          alignContent: "center",
          textAlign: "center",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <img src="assets/pat1.png" alt="partner" width="200" />
        <img src="assets/pat2.png" alt="partner" width="300" />{" "}
        <img src="assets/pat3.png" alt="partner" width="200" />{" "}
        <img src="assets/pat4.png" alt="partner" width="200" />
      </Box>
      <br />2
      <Footer />
    </div>
  );
}
