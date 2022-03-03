import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        style={{ backgroundColor: "#343a40" }}
        sx={{ mt: 5, fontSize: 17, color: "#fefae0" }}
      >
        <br />
        Inn Tourism is a part of Future plc, an international media group and
        leading digital publisher. Visit our corporate site.
        <br />
        <br />
        Future Publishing Limited Quay House, The Ambury, Bath BA1 1UA. England
        and Wales company registration number 2008885
        <br />
        <br />© All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
