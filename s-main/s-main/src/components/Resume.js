import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
  useMediaQuery,
  Grid
} from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Logicsoft-Beyond hype",
    location: "Gurugram, India",
    period: "11/2024 – 04/2025",
    highlights: [
      "Developed and maintained cross-platform mobile applications using React Native, leveraging native modules and third-party libraries for performance optimization.",
      "Optimized mobile apps for performance and responsiveness, ensuring compatibility across iOS and Android platforms.",
      "Employed Git and GitHub/GitLab for version control and Agile methodologies (Scrum) for sprint planning and task execution.",
      "Collaborated closely with UI/UX designers, QA testers, and backend teams to ensure end-to-end delivery and product quality."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Hubhawks",
    location: "Gurugram, India",
    period: "01/2023 – 09/2024",
    highlights: [
      "Architected and developed a full-stack web application from scratch to help authors manage manuscript submissions using React.js, Node.js, Express, and MongoDB.",
      "Implemented JWT authentication and RESTful APIs to manage secure user sessions and data transactions.",
      "Worked across both frontend and backend, handling API integration, new feature implementation, reusable components, and bug fixes to ensure a smooth user experience.",
      "Built dynamic, responsive web apps using the MERN stack (MongoDB, Express.js, React.js, Node.js), with RESTful API architecture and microservices."
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Satyug Darshan Institute of Engineering and Technology",
    location: "Faridabad, India",
    year: "2019 – 2023"
  }
];

// const certifications = [
//   "React.js Developer Certification",
//   "MongoDB for Developers",
//   "Certified Node.js Developer",
//   "Full Stack Web Development - MERN Stack"
// ];

const skills = [
  "Full Stack Development: React.js, Node.js, Express.js, MongoDB, MERN Stack",
  "Mobile App Development: React Native",
  "State Management: Redux, Context API",
  "Authentication: JWT, OAuth",
  "API Development: RESTful APIs, Microservices",
  "Version Control: Git, GitHub/GitLab",
  "Web Technologies: HTML, CSS, JavaScript",
  "Tools: Postman, VS Code, Docker"
];

export default function Resume() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const gradientText = {
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textFillColor: "transparent"
  };

  return (
    <Container id='certifications' maxWidth="lg" sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box sx={{ mb: 5, textAlign: "center" }}>
          <Typography
            variant="overline"
            sx={{ color: theme.palette.primary.main, fontWeight: 600, letterSpacing: 2 }}
          >
            CAREER JOURNEY
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, ...gradientText }}>
            Simran Tandon's Resume & Experience
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", px: 2 }}>
            Full Stack Developer with expertise in React.js, Node.js, and mobile app development using React Native. Passionate about building scalable web and mobile applications.
          </Typography>
        </Box>

        {/* Resume Download Section */}
        <Paper
          elevation={3}
          sx={{ borderRadius: 4, overflow: "hidden", mb: 6 }}
        >
          <Box
            sx={{
              background: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
              color: "white",
              p: isMobile ? 4 : 6,
              textAlign: isMobile ? "center" : "left"
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Download My Full Resume
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Get a comprehensive PDF version with all details and links.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: isMobile ? "center" : "start", gap: 2 }}>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                href="https://drive.google.com/file/d/1Uum9lRfinEAEidz3QK7Lzws42W5QkHP2/view?usp=sharing"
                download
                sx={{ borderRadius: 20, px: 3 }}
              >
                Download
              </Button>
              <Button
                variant="outlined"
                startIcon={<VisibilityIcon />}
                href="https://drive.google.com/file/d/1Uum9lRfinEAEidz3QK7Lzws42W5QkHP2/view?usp=sharing"
                target="_blank"
                sx={{ borderRadius: 20, px: 3, color: "white", borderColor: "white" }}
              >
                View Online
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* Experience Section */}
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, ...gradientText }}>
          Professional Experience
        </Typography>
        {experiences.map((exp, idx) => (
          <Box key={idx} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {exp.title} — {exp.company}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
              {exp.location && `${exp.location} | `}{exp.period}
            </Typography>
            <List dense>
              {exp.highlights.map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <WorkIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}

        {/* Education Section */}
        <Typography variant="h4" sx={{ fontWeight: 600, mt: 6, mb: 3, ...gradientText }}>
          Education
        </Typography>
        {education.map((edu, idx) => (
          <Box key={idx} sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {edu.degree}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {edu.institution} {edu.location ? `— ${edu.location}` : ""} {edu.year && `| ${edu.year}`}
            </Typography>
          </Box>
        ))}

        {/* Certifications Section */}
        {/* <Typography variant="h4" sx={{ fontWeight: 600, mt: 6, mb: 3, ...gradientText }}>
          Certifications
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {certifications.map((cert, idx) => (
            <Chip key={idx} label={cert} icon={<CheckCircleIcon />} color="primary" />
          ))}
        </Box> */}

        {/* Skills Section */}
        <Typography variant="h4" sx={{ fontWeight: 600, mt: 6, mb: 3, ...gradientText }}>
          Skills
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Typography variant="body1">✅ {skill}</Typography>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
