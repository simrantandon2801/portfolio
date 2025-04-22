import React, { useState } from "react";
import { 
  Grid, 
  Typography, 
  Paper, 
  Box, 
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";
import ApiIcon from "@mui/icons-material/Api";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LanguageIcon from "@mui/icons-material/Language";
import SpeedIcon from "@mui/icons-material/Speed";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// Enhanced project data with descriptions and technologies
const projectsData = [
	{
	  name: "Slushie – Literary  Platform",
	  description: "A full-stack platform enabling authors to manage manuscript submissions efficiently.",
	  details:
		"Built from scratch using MERN stack. Integrated JWT authentication, RESTful APIs, and secure session handling. Collaborated across frontend and backend for seamless UX.",
	  type: "Web Application",
	  technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
	  focus: ["Authentication", "API Integration", "MERN Stack"],
	  icon: <LanguageIcon />,
	},
	{
	  name: "Review My Book & Author Dashboard",
	  description: "Dynamic dashboards for authors to manage reviews, submissions, and book data.",
	  details:
		"Utilized Redux and Context API for scalable state management. Focused on performance, reusable components, and responsive layouts.",
	  type: "Web Application",
	  technologies: ["React.js", "Node.js", "Redux", "Context API", "MongoDB"],
	  focus: ["Frontend Dev", "Dashboard UI", "MERN Stack"],
	  icon: <AutoAwesomeIcon />,
	},
	{
	  name: "E-Bill Generator",
	  description: "An efficient web app to create and download electronic bills.",
	  details:
		"Implemented using MERN stack with secure login (JWT), PDF export using JsPDF, and MongoDB storage for bill records.",
	  type: "Utility Tool",
	  technologies: ["React.js", "Node.js", "MongoDB", "Express", "JsPDF"],
	  focus: ["PDF Generation", "Authentication", "MERN Stack"],
	  icon: <BugReportIcon />,
	},
	{
	  name: "Admin Dashboard",
	  description: "Interactive admin panel for data monitoring and decision-making.",
	  details:
		"Data visualization with D3.js and Chart.js, user authentication, and real-time data tracking built on MERN architecture.",
	  type: "Admin Panel",
	  technologies: ["React.js", "D3.js", "Chart.js", "Node.js", "MongoDB"],
	  focus: ["Data Visualization", "Secure Auth", "React UI"],
	  icon: <SpeedIcon />,
	},
	{
	  name: "Cross-platform Mobile Apps",
	  description: "React Native applications optimized for both Android and iOS platforms.",
	  details:
		"Used native modules, third-party libraries, and performance optimization techniques. Ensured consistency across devices.",
	  type: "Mobile App",
	  technologies: ["React Native", "JavaScript", "Redux"],
	  focus: ["React Native", "Cross-Platform", "Performance"],
	  icon: <PhoneAndroidIcon />,
	},
  ];
  

function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Function to get random pastel color for project cards
  const getCardColor = (index) => {
    const colors = [
      "rgba(63, 81, 181, 0.04)",
      "rgba(76, 175, 80, 0.04)",
      "rgba(156, 39, 176, 0.04)",
      "rgba(0, 188, 212, 0.04)",
      "rgba(255, 152, 0, 0.04)",
      "rgba(233, 30, 99, 0.04)",
      "rgba(3, 169, 244, 0.04)"
    ];
    return colors[index % colors.length];
  };

  // Function to get border color for project cards
  const getBorderColor = (index) => {
    const colors = [
      "rgba(63, 81, 181, 0.3)",
      "rgba(76, 175, 80, 0.3)",
      "rgba(156, 39, 176, 0.3)",
      "rgba(0, 188, 212, 0.3)",
      "rgba(255, 152, 0, 0.3)",
      "rgba(233, 30, 99, 0.3)",
      "rgba(3, 169, 244, 0.3)"
    ];
    return colors[index % colors.length];
  };

  return (
    <Container id='projects' maxWidth="lg" sx={{ py: 6 }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Box
          sx={{
            mb: 5,
            textAlign: "center",
          }}
        >
          <Typography 
            variant="overline" 
            sx={{ 
              color: "#3f51b5", 
              fontWeight: 600,
              letterSpacing: 2,
              mb: 1,
              display: "block"
            }}
          >
            MY PORTFOLIO
          </Typography>
          <Typography 
            variant="h3" 
            sx={{
              fontWeight: 700,
              mb: 2,
              background: "linear-gradient(90deg, #304b63 0%, #4a3a6b 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block"
            }}
          >
            Featured Projects
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              maxWidth: "700px", 
              mx: "auto", 
              mb: 4,
              px: 2
            }}
          >
            A selection of projects where I've applied my QA expertise to ensure software quality,
            implement automation, and develop testing strategies.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card 
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    border: `1px solid ${getBorderColor(index)}`,
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                    },
                    backgroundColor: getCardColor(index)
                  }}
                >
                  <Box 
                    sx={{ 
                      p: 2, 
                      display: "flex", 
                      alignItems: "center",
                      borderBottom: `1px solid ${getBorderColor(index)}`
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: "10px", 
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        backgroundColor: getBorderColor(index),
                        color: "#fff"
                      }}
                    >
                      {project.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      component="div"
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        flex: 1
                      }}
                    >
                      {project.name}
                    </Typography>
                    <Chip 
                      label={project.type} 
                      size="small"
                      sx={{
                        backgroundColor: getBorderColor(index),
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "0.7rem"
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 2, pt: 2, flex: 1 }}>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ mb: 2, minHeight: "3rem" }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                      {project.focus.slice(0, 2).map((tag, i) => (
                        <Chip 
                          key={i} 
                          label={tag} 
                          size="small" 
                          sx={{ 
                            fontSize: "0.7rem",
                            height: "22px",
                            backgroundColor: "rgba(0,0,0,0.05)"
                          }} 
                        />
                      ))}
                      {project.focus.length > 2 && (
                        <Chip 
                          label={`+${project.focus.length - 2}`} 
                          size="small" 
                          sx={{ 
                            fontSize: "0.7rem",
                            height: "22px",
                            backgroundColor: "rgba(0,0,0,0.03)"
                          }} 
                        />
                      )}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                      size="small" 
                      onClick={() => handleClickOpen(project)}
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        color: theme.palette.primary.main
                      }}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Project Details Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            overflow: "hidden"
          }
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle 
              sx={{ 
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                px: 3,
                py: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box 
                  sx={{ 
                    mr: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.palette.primary.main
                  }}
                >
                  {selectedProject.icon}
                </Box>
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                  {selectedProject.name}
                </Typography>
              </Box>
              <IconButton onClick={handleClose} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ px: 3, py: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
                    Project Overview
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProject.description}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProject.details}
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: "1.1rem", mt: 3 }}>
                    Testing Focus
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                    {selectedProject.focus.map((focus, i) => (
                      <Chip 
                        key={i} 
                        label={focus} 
                        sx={{ 
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          fontWeight: 500
                        }} 
                      />
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 2, 
                      borderRadius: "12px",
                      backgroundColor: "rgba(0,0,0,0.02)",
                      border: "1px solid rgba(0,0,0,0.05)"
                    }}
                  >
                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                      Project Details
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: "text.secondary" }}>
                        Project Type
                      </Typography>
                      <Typography variant="body1">
                        {selectedProject.type}
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: "text.secondary", }}>
                        Technologies Used
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {selectedProject.technologies.map((tech, i) => (
                          <Chip 
                            key={i} 
                            label={tech} 
                            size="small"
                            sx={{ 
								backgroundColor: getBorderColor(i),
                              border: "1px solid rgba(0,0,0,0.08)",
                              fontSize: "0.75rem"
                            }} 
                          />
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2, borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              <Button 
                onClick={handleClose}
                sx={{
                  textTransform: "none",
                  fontWeight: 600
                }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}

export default Projects;