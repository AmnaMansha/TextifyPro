import React, { useEffect, useState } from "react";
// Importing React hooks for state management and side effects.

import Box from "@mui/material/Box";
// Importing the Box component from Material-UI for layout purposes.

import logger from "../utils/logger";
// Importing a custom logger utility to log messages for debugging and monitoring.

import { makeStyles } from "@mui/styles";
// Importing makeStyles from Material-UI to define custom styles for the component.

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#022BA7",
    textAlign: "center",
  },
  count: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#022BA7",
  },
}));
// Defining custom styles for the Counter component using Material-UI's makeStyles.

const Counter = (props) => {
  // Functional component named Counter. It receives props (not used directly in this version).

  const classes = useStyles();
  // Applying the defined styles to the component.

  const [count, setCount] = useState("0");
  const [count2, setCount2] = useState("0");
  const [count3, setCount3] = useState("0");
  // Using React state to manage the displayed numbers for three counters.

  const label1 = "Satisfied Nooters!";
  const label2 = "Transcription";
  const label3 = "Of time saved";
  // Labels for each counter.

  const number = "646787";
  const number2 = "7856234";
  const number3 = "9875646787";
  // The target numbers for each counter.

  const duration = 2;
  // The duration of the animation in seconds.

  useEffect(() => {
    let start = 0;
    // Initial value for the counter.

    logger.info("Counter component mounted");
    // Logging that the component has been mounted.

    const end = parseInt(number.substring(0, 3));
    const end2 = parseInt(number2.substring(0, 3));
    const end3 = parseInt(number3.substring(0, 3));
    // Extracting the first three digits of the target numbers and converting them to integers.

    if (start === end) return;
    // If the counter is already at the target, do nothing.

    const totalMilSecDur = parseInt(duration);
    const incrementTime = (totalMilSecDur / end) * 1000;
    const incrementTime2 = (totalMilSecDur / end2) * 1000;
    const incrementTime3 = (totalMilSecDur / end3) * 1000;
    // Calculating the time interval for incrementing the counters.

    const timer = setInterval(
      () => {
        start += 1;
        // Increment the counter value.

        logger.debug(`Counter incremented to ${start}`);
        // Log the current value for debugging.

        setCount(String(start) + number.substring(3));
        setCount2(String(start) + number2.substring(3));
        setCount3(String(start) + number3.substring(3));
        // Update the displayed numbers, appending the remainder of the target number.

        if (start === end) {
          clearInterval(timer);
          logger.info("Counter component unmounted");
        }
        // Clear the timer when the counter reaches the target and log unmounting.

        if (start === end2) clearInterval(timer);
        if (start === end3) clearInterval(timer);
        // Additional checks for the other two counters to stop the timer.
      },
      incrementTime,
      incrementTime2,
      incrementTime3
    );
    // Setting up an interval to update the counters at the calculated time intervals.

  }, [number, number2, number3, duration]);
  // Adding dependencies to ensure the effect runs when any of these values change.

  return (
    <Box
      sx={{
        display: { lg: "flex" },
        gap: 10,
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Box component for layout. The counters are displayed in a row for large screens. */}
      
      <div className="Count">
        <h3 className={classes.count}>+{count}</h3>
        <p className={classes.label}>{label1}</p>
      </div>
      {/* First counter with its count and label. */}

      <div className="Count">
        <h3 className={classes.count}>+{count2}</h3>
        <p className={classes.label}>{label2}</p>
      </div>
      {/* Second counter with its count and label. */}

      <div className="Count">
        <h3 className={classes.count}>+{count3}</h3>
        <p className={classes.label}>{label3}</p>
      </div>
      {/* Third counter with its count and label. */}
    </Box>
  );
};

export default Counter;
// Exporting the Counter component as the default export.
