/**
 * Landing.js
 * This component represents the main landing page of the application.
 * It includes various sections like headers, solutions, features, plans, partners, and footer.
 * Uses Material-UI for styling and responsive design.
 */

import * as React from "react";
import { Link as RouterLink, Link } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Cards from "../common/Cards";
import Carasouel from "../Component/Carasouel";
import Slider from "../Component/Slider";
import { Box, Container, Card, Button, Grid } from "@mui/material";
import Counter from "../Component/Counter";
import logger from "../utils/logger";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

// Custom styles for the component using Material-UI's `makeStyles`
const useStyles = makeStyles((theme) => ({
  section1: {
    // Gradient background for the first section
    background: "linear-gradient(to right bottom, #f0f4fc 60%, #ffff 10%)",
    padding: "4rem",
    marginTop: "-4rem",
  },
  h3: {
    fontSize: "2rem",
    fontWeight: 900,
    lineHeight: "2.75rem",
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
    // Responsive design for the header image
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
    width: "250px",
    ["@media (min-width:780px)"]: {
      width: "400px",
    },
  },
  req_div: {
    background: "linear-gradient(to right top, #f0f4fc 70%, #ffff 10%)",
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

/**
 * Landing Component
 * Contains all the content displayed on the landing page.
 * Uses multiple Material-UI components for layout and design.
 */
export default function Landing() {
  const navigate = useNavigate(); // React Router hook for navigation
  const classes = useStyles(); // Access custom styles

  /**
   * Navigates to the "Book Demo" page when the button is clicked.
   */
  const handleClick = () => {
    navigate("/bookdemo");
  };

  // Logs a message when the component is rendered
  logger.info("Landing page rendered");

  // Data for solutions section
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
      desp: "Automatic subtitle generator. Customize the style and the subtitles of your video.",
      src: "assets/cc.gif",
    },
    {
      heading: "Analyser",
      desp: "Automatic topic tagger, keywords, questions, and more!",
      src: "assets/doc.gif",
    },
  ];

  // Data for requirements section
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
      req: "Statistical analysis on one or more audio, video, and CSV files",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Introductory Section */}
      <Grid container className={classes.section1}>
        <Grid item lg={6} xs={12}>
          <div>
            <h2 className={classes.heading}>Transcribe & Analyze Your Focus Group</h2>
            <p className={classes.sologan}>
              No more note-taking, Noota assists you on all your conversations.
            </p>
            <ul>
              <li className={classes.list_item}>
                <b>Transcribe</b> in over 70 languages.
              </li>
              <li className={classes.list_item}>
                <b>Record</b> and annotate your meetings live.
              </li>
              <li className={classes.list_item}>
                <b>Detect</b> topics with the Noota analyzer.
              </li>
            </ul>
            <Link component={RouterLink} to="/bookdemo" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleClick}
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

     
      </Grid>

      {/* Footer */}
      <Footer />
    </div>
  );
}
