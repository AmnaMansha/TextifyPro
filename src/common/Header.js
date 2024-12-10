import * as React from "react";
// Importing React library for building the component.

import { Link as RouterLink, Link } from "react-router-dom";
// Importing Link components for navigation between routes.

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Slide } from "@mui/material";
// Importing Material-UI components for creating a responsive and styled user interface.

import logger from "../utils/logger";
// Importing a custom logger utility to log messages for debugging and monitoring.

const drawerWidth = 240;
// Setting the width of the drawer for mobile navigation.

const navItems = [
  { name: "Product", route: "/product" },
  { name: "Pricing", route: "/pricing" },
  { name: "Demo", route: "/demo" },
  { name: "About", route: "/aboutus" },
];
// Defining the navigation items with their names and routes.

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // State to control whether the mobile drawer is open or closed.

  const trigger = useScrollTrigger();
  // Hook to detect scrolling for additional behavior (not used in this version).

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // Toggles the state of the mobile drawer.

  const handleLoginClick = () => {
    logger.info("Login button clicked");
  };
  // Logs a message when the login button is clicked.

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* Mobile Drawer content */}
      <div
        style={{
          flexGrow: 1,
          color: "#fff",
          display: { xs: "none", sm: "block" },
          background: "#0A2640",
          padding: "0.3rem",
        }}
      >
        {/* Placeholder for a logo or branding image */}
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={Math.random()} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                component={RouterLink}
                to={item.route}
                style={{ textDecoration: "none" }}
              >
                <ListItemText>
                  <Button>{item.name}</Button>
                </ListItemText>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // Drawer content for mobile, including navigation links mapped from `navItems`.

  return (
    <Box sx={{ display: "flex" }}>
      {/* Main container for the navigation bar */}
      <AppBar
        component="nav"
        style={{
          background: "#f0f4fc",
        }}
        position="fixed"
        elevation={0}
      >
        {/* Top AppBar for navigation */}
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ display: { lg: "none", md: "none" } }} />
          </IconButton>
          {/* Icon button for toggling the drawer in mobile view */}

          <div
            style={{
              color: "#fff",
              display: { xs: "none", sm: "block" },
            }}
          >
            <img
              src="https://noota.io/wp-content/uploads/2022/01/noota-ico-2048x739.webp"
              alt="salelabs"
              height="40"
            />
          </div>
          {/* Logo displayed in larger screens */}

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              position: "absolute",
              left: "40%",
            }}
          >
            {navItems.map((item) => (
              <Link
                component={RouterLink}
                to={item.route}
                style={{ textDecoration: "none" }}
                key={Math.random()}
              >
                <Button style={{ color: "#0A2640", fontWeight: "bold" }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
          {/* Navigation links displayed in desktop view */}

          <Box
            sx={{
              position: "absolute",
              right: 0,
              padding: 4,
              display: { lg: "flex", md: "none", sm: "none", xs: "none" },
            }}
          >
            <Link
              component={RouterLink}
              to="/login"
              style={{ textDecoration: "none" }}
            >
              <Button
                onClick={handleLoginClick}
                style={{
                  background: "#fff",
                  color: "#000",
                  borderRadius: "24px",
                  fontWeight: "bold",
                  padding: "8px 20px",
                  marginLeft: "0.5rem",
                }}
              >
                Login
              </Button>
            </Link>
            <Link
              component={RouterLink}
              to="/bookdemo"
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{
                  background: "#0A2640",
                  color: "#ffff",
                  borderRadius: "24px",
                  fontWeight: "bold",
                  padding: "8px 20px",
                  marginLeft: "0.5rem",
                }}
              >
                Free Trial
              </Button>
            </Link>
          </Box>
          {/* Buttons for Login and Free Trial in the header */}
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* Temporary Drawer for mobile navigation */}
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* Empty Box to account for AppBar height */}
      </Box>
    </Box>
  );
}
