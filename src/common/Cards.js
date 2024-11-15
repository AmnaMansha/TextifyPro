import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cards(props) {
  return (
    <Card
      sx={{
        maxWidth: 375,
        height: 300,
        backgroundColor: props.bg,
        borderRadius: "2rem",
        margin: 1,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: "2rem", fontWeight: "bold", color: props.txt }}
        >
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5, color: props.txt }}>
          {props.sologan}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "2rem", fontWeight: "bold", color: props.txt }}
        >
          {props.amount}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem", color: props.txt }}>
          {props.time}
          <br />
          {props.rate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          sx={{
            borderRadius: "24rem",
            backgroundColor: props.btn,
            width: 400,
            color: props.btncolor,
          }}
        >
          Start
        </Button>
      </CardActions>
    </Card>
  );
}
