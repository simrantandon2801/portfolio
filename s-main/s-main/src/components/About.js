import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Paper id='about' elevation={3} sx={{ p: 4, my: 4 }}>
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography variant="body1">
          I’m Simran Tandon, a passionate and detail-oriented Full Stack Developer based in Faridabad, India, with hands-on experience in building scalable and responsive web and mobile applications using modern JavaScript technologies.

          With a Bachelor of Technology from Satyug Darshan Institute of Engineering and Technology, I have a solid academic foundation and practical exposure in real-world development environments. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have built multiple end-to-end applications including dashboards, admin panels, and electronic billing systems.

          In my current role at Logicsoft-Beyond Hype, I develop cross-platform mobile applications using React Native, focusing on performance, responsiveness, and seamless user experiences across iOS and Android. I collaborate with cross-functional teams including UI/UX designers and QA testers to ensure pixel-perfect implementation and functional integrity.

          Previously at Hubhawks, I led the architecture and development of several key platforms such as “Slushie – Literary Submission Platform” and “Review My Book”. These projects involved secure authentication with JWT, API integrations, component-based architecture, and scalable backend systems with Node.js and MongoDB.

          I’m well-versed in Git for version control, Agile methodologies for team collaboration, and tools like Redux, Context API, and JsPDF for efficient frontend and backend performance. My expertise extends to building reusable components, implementing RESTful APIs, and creating dynamic data visualizations using Chart.js and D3.js.

          Outside of coding, I continuously explore new technologies, frameworks, and development trends to stay current in the fast-paced tech world. Whether it's architecting systems, fixing bugs, or enhancing UI/UX, I’m driven by a deep commitment to quality code and meaningful user experiences.
        </Typography>
      </Paper>
    </motion.div>
  );
}

export default About;
