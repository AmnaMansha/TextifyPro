import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";

const Slider = () => {
  const items = [
    {
      src: "assets/comment.png",
    },
    {
      src: "assets/comment.png",
    },
    {
      src: "assets/comment.png",
    },
    {
      src: "assets/comment.png",
    },
    {
      src: "assets/comment.png",
    },
  ];

  return (
    <div
      style={{
        color: "#494949",
        width: 300,
        padding: "1rem",
      }}
    >
      <Carousel>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.src}
                alt="img"
                width="250"
                style={{ padding: "2rem", borderRadius: "2rem" }}
              />
            </div>
          );
        })}
      </Carousel>
      <br />
    </div>
  );
};

export default Slider;
