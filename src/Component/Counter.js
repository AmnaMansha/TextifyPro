import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import logger from "../utils/logger";
//styling

import { makeStyles } from "@mui/styles";
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

const Counter = (props) => {
  // label of counter
  // number to increment to
  // duration of count in seconds

  // number displayed by component
  const classes = useStyles();
  const [count, setCount] = useState("0");
  const [count2, setCount2] = useState("0");
  const [count3, setCount3] = useState("0");
  const label1 = "Satisfied Nooters!";
  const label2 = "Transcription";
  const label3 = "Of time saved";
  const number = "646787";
  const number2 = "7856234";
  const number3 = "9875646787";
  const duration = 2;
  useEffect(() => {
    let start = 0;
    logger.info("Counter component mounted");
    // first three numbers from props
    const end = parseInt(number.substring(0, 3));
    const end2 = parseInt(number2.substring(0, 3));
    const end3 = parseInt(number3.substring(0, 3));
    // if zero, return
    if (start === end) return;

    // find duration per increment
    const totalMilSecDur = parseInt(duration);
    const incrementTime = (totalMilSecDur / end) * 1000;
    const incrementTime2 = (totalMilSecDur / end2) * 1000;
    const incrementTime3 = (totalMilSecDur / end3) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    const timer = setInterval(
      () => {
        start += 1;
        logger.debug(`Counter incremented to ${start}`);
        setCount(String(start) + number.substring(3));
        setCount2(String(start) + number2.substring(3));
        setCount3(String(start) + number3.substring(3));
        if (start === end) {
          clearInterval(timer);
          logger.info("Counter component unmounted");
        }
         
        if (start === end2) clearInterval(timer);
        if (start === end3) clearInterval(timer);
      },
      incrementTime,
      incrementTime2,
      incrementTime3
    );

    // dependency array
  }, [number, number2, number3, duration]);

  return (
    <Box
      sx={{
        display: { lg: "flex" },
        gap: 10,
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div className="Count">
        <h3 className={classes.count}>+{count}</h3>
        <p className={classes.label}>{label1}</p>
      </div>
      <div className="Count">
        <h3 className={classes.count}>+{count2}</h3>
        <p className={classes.label}>{label2}</p>
      </div>
      <div className="Count">
        <h3 className={classes.count}>+{count3}</h3>
        <p className={classes.label}>{label3}</p>
      </div>
    </Box>
  );
};

export default Counter;
