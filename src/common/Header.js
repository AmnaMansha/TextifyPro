import * as React from "react";
import { Link as RouterLink, Link } from "react-router-dom";
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
// import salelabs from "../../_mock/images/salelabs.png";
// import salelabs2 from "../../_mock/images/salelabs2.png";
// import fidelity from "../../_mock/images/fidelity.png";

const drawerWidth = 240;
const navItems = [
  { name: "Product", route: "/product" },
  { name: "Pricing", route: "/pricing" },
  { name: "Demo", route: "/demo" },
  {
    name: "About",
    route: "/aboutus",
  },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const trigger = useScrollTrigger();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div
        style={{
          flexGrow: 1,
          color: "#fff",
          display: { xs: "none", sm: "block" },
          background: "#0A2640",
          padding: "0.3rem",
        }}
      >
        {/* <img src={} alt="salelabs" height="40" /> */}
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

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        style={{
          background: "#f0f4fc",
        }}
        position="fixed"
        elevation={0}
      >
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
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
