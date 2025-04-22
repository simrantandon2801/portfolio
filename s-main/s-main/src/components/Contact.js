import React from "react";
import {
  Typography,
  Paper,
  Box,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Divider,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const contactItems = [
    {
      icon: <EmailIcon fontSize="large" />,
      title: "Email",
      value: "simrantandon2801@gmail.com",
      link: "mailto:simrantandon2801@gmail.com",
      delay: 0.1
    },
    {
      icon: <GitHubIcon fontSize="large" />,
      title: "Github",
      value: "github.com/simrantandon2801",
      link: "https://github.com/simrantandon2801",
      delay: 0.2
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      title: "LinkedIn",
      value: "linkedin.com/in/simran-tandon",
      link: "https://www.linkedin.com/in/simran-tandon1/",
      delay: 0.3
    },
    {
      icon: <LocationOnIcon fontSize="large" />,
      title: "Location",
      value: "Faridabad, Haryana, India",
      link: "https://goo.gl/maps/faridabad",
      delay: 0.4
    }
  ];

  return (
    <Container maxWidth="lg" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 6,
            mt: 8,
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: "text",
            textFillColor: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get In Touch
        </Typography>
      </motion.div>

      <Paper 
        elevation={6} 
        sx={{ 
          borderRadius: 4,
          overflow: "hidden",
          p: { xs: 3, md: 5 },
          backgroundImage: `linear-gradient(to bottom right, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
          mb: 8
        }}
      >
        <Grid container spacing={4}>
          {contactItems.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay, duration: 0.5 }}
              >
                <Box 
                  sx={{ 
                    display: "flex", 
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "flex-start" : "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      background: theme.palette.action.hover,
                      transform: "translateY(-5px)"
                    }
                  }}
                >
                  <Box sx={{ 
                    color: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 1.5,
                    borderRadius: 2,
                    background: theme.palette.background.paper,
                    boxShadow: 1
                  }}>
                    {item.icon}
                  </Box>
                  <Box sx={{ ml: isMobile ? 0 : 2, mt: isMobile ? 2 : 0 }}>
                    <Typography variant="subtitle1" fontWeight={600} color="text.secondary">
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      component="a" 
                      href={item.link} 
                      sx={{ 
                        textDecoration: "none", 
                        color: theme.palette.text.primary,
                        "&:hover": {
                          color: theme.palette.primary.main,
                          textDecoration: "underline"
                        }
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Typography variant="h6" gutterBottom color="primary">
              Let's Connect
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Feel free to reach out for collaborations or just a friendly chat!
            </Typography>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
              {contactItems.slice(0, 3).map((item, index) => (
                <Tooltip title={item.title} key={index}>
                  <IconButton 
                    color="primary" 
                    aria-label={item.title}
                    component="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.15)",
                        background: theme.palette.primary.main,
                        color: theme.palette.common.white
                      }
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;