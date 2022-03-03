import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#fefae0" }} position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h2"
            component="div"
            sx={{
              mt: 1,
              fontStyle: "italic",
              textAlign: "left",
              fontWeight: "bold",
              color: "#606c38",
              flexGrow: 1,
            }}
          >
            Inn Tourism
          </Typography>
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "#343a40",
              }}
            >
              Home
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/services">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "#343a40",
              }}
            >
              Services
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/addNewService">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "#343a40",
              }}
            >
              AddNewService
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/manageAllTrips">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "#343a40",
              }}
            >
              ManageAllTrips
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/myOrders">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "#343a40",
              }}
            >
              MyOrders
            </Button>
          </NavLink>
          <Button sx={{ color: "#343a40" }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
