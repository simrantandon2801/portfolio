import React from "react";
import { 
  Grid, 
  Typography, 
  Paper, 
  Box, 
  Container, 
  Chip,
  useTheme,
  useMediaQuery,
  LinearProgress
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import ComputerIcon from "@mui/icons-material/Computer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TimelineIcon from "@mui/icons-material/Timeline";
import BuildIcon from "@mui/icons-material/Build";
import { Description } from "@mui/icons-material";

const skillsData = [
	{
	  name: "React.js",
	  description: "Experienced in building dynamic and responsive user interfaces using React.js and component-based architecture.",
	  icon: <CodeIcon />,
	  proficiency: 95,
	  category: "Frontend",
	  color: "#61DAFB", // React Blue
	},
	{
	  name: "Node.js & Express",
	  description: "Skilled in creating robust and scalable backend APIs using Node.js and Express.js with RESTful architecture.",
	  icon: <SettingsIcon />,
	  proficiency: 90,
	  category: "Backend",
	  color: "#68A063", // Node Green
	},
	{
	  name: "MongoDB",
	  description: "Hands-on experience in modeling and managing NoSQL databases using MongoDB for efficient data operations.",
	  icon: <StorageIcon />,
	  proficiency: 88,
	  category: "Database",
	  color: "#4DB33D", // MongoDB Green
	},
	{
	  name: "React Native",
	  description: "Developed cross-platform mobile apps with React Native, focusing on performance and native integration.",
	  icon: <ComputerIcon />,
	  proficiency: 85,
	  category: "Mobile",
	  color: "#3DDC84", // RN Green
	},
	{
	  name: "JWT Authentication",
	  description: "Implemented secure authentication and session management using JSON Web Tokens in full-stack apps.",
	  icon: <BugReportIcon />,
	  proficiency: 92,
	  category: "Security",
	  color: "#F4A261",
	},
	{
	  name: "Redux & Context API",
	  description: "Proficient in global state management using Redux and Context API for large-scale applications.",
	  icon: <TimelineIcon />,
	  proficiency: 89,
	  category: "State Management",
	  color: "#764ABC",
	},
	{
	  name: "Git & GitHub",
	  description: "Version control expert using Git and GitHub, with experience in branching strategies and CI/CD.",
	  icon: <AssignmentIcon />,
	  proficiency: 95,
	  category: "Tools",
	  color: "#24292e",
	},
	{
	  name: "HTML/CSS/JS",
	  description: "Strong foundation in core web technologies including semantic HTML5, CSS3, and modern JavaScript.",
	  icon: <BuildIcon />,
	  proficiency: 96,
	  category: "Frontend",
	  color: "#E44D26",
	},
	{
	  name: "Agile & Scrum",
	  description: "Experienced working in Agile teams with sprint planning, daily standups, and iterative development.",
	  icon: <SpeedIcon />,
	  proficiency: 90,
	  category: "Methodology",
	  color: "#00B4D8",
	}
  ];
  

const categories = [...new Set(skillsData.map(skill => skill.category))];

function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container id='skills'  maxWidth="lg" sx={{ py: 6 }}>
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
            EXPERTISE
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
            Skills & Tools
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              maxWidth: "700px", 
              mx: "auto", 
              mb: 3,
              px: 2
            }}
          >
            A comprehensive collection of technologies and methodologies I utilize
            to ensure software quality and streamline testing processes.
          </Typography>
          
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1, mb: 4 }}>
            {categories.map((category) => (
              <Chip 
                key={category}
                label={category}
                color="primary"
                variant="outlined"
                sx={{ 
                  borderRadius: "16px",
                  px: 1,
                  fontWeight: 500,
                  borderWidth: "2px"
                }}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr" : isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: 3,
          }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "16px",
                  position: "relative",
                  overflow: "hidden",
                  background: "white",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                    "& .skill-icon": {
                      transform: "scale(1.1)"
                    }
                  }
                }}
              >
                <Box 
                  sx={{ 
                    position: "absolute", 
                    top: 0, 
                    right: 0, 
                    p: 1 
                  }}
                >
                  <Chip 
                    label={skill.category} 
                    size="small" 
                    sx={{ 
                      backgroundColor: "rgba(63, 81, 181, 0.1)",
                      color: "#3f51b5",
                      fontWeight: 600,
                      fontSize: "0.7rem"
                    }} 
                  />
                </Box>
                
                <Box 
                  className="skill-icon"
                  sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    mb: 2.5,
                    color: "#3f51b5",
                    transform: "scale(1)",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <Box 
                    sx={{ 
                      borderRadius: "12px", 
                      p: 1.5, 
                      mr: 2,
                      background: "rgba(63, 81, 181, 0.1)",
                      display: "flex"
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        fontSize: "1.1rem",
                        lineHeight: 1.2
                      }}
                    >
                      {skill.name}
                    </Typography>
                    {skill.details && (
                      <Typography 
                        variant="body2" 
                        // color="text.secondary"
                        sx={{ 
                          fontSize: "0.85rem",
                          mt: 0.5
                        }}
                      >
                        {skill.details}
                      </Typography>
                    )}
                  </Box>
                </Box>
                
                <Box sx={{ mt: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                    <Typography 
                      variant="body2" 
                    //   color="text.secondary"
                      sx={{ fontWeight: 500,color:'#000' }}
                    >
                      Proficiency
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ fontWeight: 600 ,color:'#000'}}
                    >
                      {skill.proficiency}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={skill.proficiency} 
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: "rgba(0,0,0,0.05)",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 4,
                        background: `linear-gradient(90deg, #3f51b5, ${skill.proficiency > 90 ? "#8e24aa" : "#5c6bc0"})`
                      }
                    }}
                  />
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
}

export default Skills;