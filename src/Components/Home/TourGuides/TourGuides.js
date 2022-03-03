import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import TourGuide from "../TourGuide/TourGuide";

const TourGuides = () => {
  const [tourguides, setTourGuides] = useState([]);

  useEffect(() => {
    fetch("./tourguides.json")
      .then((res) => res.json())
      .then((data) => setTourGuides(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="h3"
        sx={{
          mt: 15,
          mb: 10,
          fontStyle: "italic",
          fontWeight: "bold",
          color: "#343a40",
        }}
      >
        Our Tour Guides
      </Typography>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {tourguides.map((tourguide) => (
            <TourGuide key={tourguide.id} tourguide={tourguide}></TourGuide>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TourGuides;
