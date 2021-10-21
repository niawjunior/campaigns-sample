import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link, useLocation } from "react-router-dom";
function Layout({ children }) {
  const [state, setState] = useState(false);
  const location = useLocation();
  const toggleDrawer = (open) => {
    setState(open);
  };

  const everGage = window.Evergage;
  useEffect(() => {}, [everGage]);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["Home", "About"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "rgb(76, 82, 86)" }}
        >
          <Toolbar style={{ minHeight: "38px" }}>
            <IconButton
              id="nav_bar_toggle_drawer"
              onClick={() => toggleDrawer(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              id="nav_bar_home_page_link"
              style={{ textDecoration: "none" }}
              component={Link}
              to={"/"}
              color="inherit"
              variant="h6"
              sx={{ flexGrow: 1 }}
            >
              Campaign
            </Typography>
            <Button
              id="nav_bar_second_home_loan"
              component={Link}
              to={"/second-home-loan"}
              variant="text"
              color="inherit"
              style={{
                background:
                  location?.pathname === "/second-home-loan"
                    ? "rgba(0, 0, 0, 0.04)"
                    : null,
                fontSize: "12px",
              }}
            >
              Second Home Loan
            </Button>
            <Button
              id="nav_bar_subscribe_button"
              component={Link}
              to={"/subscribe"}
              variant="text"
              color="inherit"
              style={{
                marginLeft: "10px",
                background:
                  location?.pathname === "/subscribe"
                    ? "rgba(0, 0, 0, 0.04)"
                    : null,
                fontSize: "12px",
              }}
            >
              Subscribe
            </Button>
          </Toolbar>
        </AppBar>
        <Box>{children}</Box>
      </Box>
      <Drawer anchor={"left"} open={state} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}

export default Layout;
