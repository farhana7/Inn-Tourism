import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const TourGuide = ({ tourguide }) => {
  const { _id, name, imag } = tourguide;

  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardMedia
          component="img"
          style={{ width: "400px", height: "300px", margin: "0 auto" }}
          image={imag}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontStyle: "italic" }}>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TourGuide;
