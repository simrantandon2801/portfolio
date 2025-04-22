import React, { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#certifications" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerList = (
    <Box 
      sx={{ 
        width: 250, 
        paddingTop: 2,
        backgroundColor: "#1e3a5f",
        height: "100%",
        color: "white"
      }} 
      onClick={toggleDrawer}
    >
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.name} component="a" href={item.href}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }
            }}
          >
            <ListItemText 
              primary={item.name} 
              sx={{ 
                color: "white",
                paddingLeft: 2
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: "linear-gradient(to right, #1e3a5f, #4ca1af)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Toolbar>
        <Box 
          sx={{ 
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "flex-start" : "flex-start",
            justifyContent: "center"
          }}
        >
          <Typography 
            variant="h6" 
            component="div"
            sx={{ 
              fontWeight: 700,
              letterSpacing: "0.5px",
              fontSize: "1.2rem",
              lineHeight: 1.2
            }}
          >
            Simran Tandon
          </Typography>
          <Typography 
            variant="subtitle2" 
            component="div"
            sx={{ 
              opacity: 0.9,
              fontSize: "0.85rem"
            }}
          >
            Mern stack Developer
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer}
            >
              {drawerList}
            </Drawer>
          </>
        ) : (
          <Box 
            sx={{ 
              display: "flex",
              alignItems: "center",
              gap: "1.5rem"
            }}
          >
            {navItems.slice(0, -1).map((item) => (
              <Button 
                key={item.name}
                href={item.href}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "0.95rem",
                  position: "relative",
                  "&:hover": {
                    backgroundColor: "transparent",
                    "&::after": {
                      width: "100%"
                    }
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 5,
                    left: 8,
                    width: 0,
                    height: "2px",
                    backgroundColor: "white",
                    transition: "width 0.3s"
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
            <Button 
              variant="outlined" 
              href={navItems[navItems.length - 1].href}
              sx={{
                color: "white",
                borderColor: "rgba(255, 255, 255, 0.5)",
                textTransform: "none",
                borderRadius: "4px",
                padding: "6px 16px",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }
              }}
            >
              {navItems[navItems.length - 1].name}
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;