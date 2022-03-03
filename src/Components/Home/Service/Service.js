import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, description, img } = service;

  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardMedia
          component="img"
          style={{ width: "400px", height: "300px", margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{ textDecoration: "none" }}
            className="w-full"
            to={`/purchase/${_id}`}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#9b2226",
                width: "400px",
              }}
              // size="medium"
            >
              Take a Tour
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Service;
