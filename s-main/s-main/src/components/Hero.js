import React from "react";
import { Box, Typography, Button, Container, Grid, useTheme, useMediaQuery } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Hero1 from '../Images/9.jpg'
function Hero() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
	return (
	  <Box id='#home'
		sx={{
		  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
		  minHeight: "100vh",
		  display: "flex",
		  alignItems: "center",
		  pt: 8,
		  pb: 8,
		  overflow: "hidden",
		  position: "relative",
		}}
	  >
		{/* Background animated shapes */}
		<Box
		  sx={{
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			overflow: "hidden",
			zIndex: 0,
		  }}
		>
		  {[...Array(5)].map((_, i) => (
			<motion.div
			  key={i}
			  initial={{
				x: Math.random() * 100 - 50,
				y: Math.random() * 100 - 50,
				opacity: 0.2,
				scale: Math.random() * 0.5 + 0.5
			  }}
			  animate={{
				x: Math.random() * 100 - 50,
				y: Math.random() * 100 - 50,
				opacity: [0.2, 0.3, 0.2],
				scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.7 + 0.6, Math.random() * 0.5 + 0.5]
			  }}
			  transition={{
				duration: 15 + i * 2,
				repeat: Infinity,
				repeatType: "reverse",
				ease: "easeInOut"
			  }}
			  style={{
				position: "absolute",
				width: 200 + i * 50,
				height: 200 + i * 50,
				borderRadius: "50%",
				background: `rgba(99, 125, 234, ${0.05 + i * 0.01})`,
				filter: "blur(50px)",
				zIndex: 0,
			  }}
			/>
		  ))}
		</Box>
  
		<Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
		  <Grid container spacing={4} alignItems="center">
			<Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
			  <motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			  >
				<Typography
				  component="h1"
				  sx={{
					fontSize: { xs: "2.5rem", md: "4rem" },
					fontWeight: 700,
					background: "linear-gradient(90deg, #2b5876 0%, #4e4376 100%)",
					backgroundClip: "text",
					textFillColor: "transparent",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					mb: 2,
					lineHeight: 1.1
				  }}
				>
				  Hi, I'm Simran
				</Typography>
  
				<Box
				  sx={{
					height: "60px",
					display: "flex",
					alignItems: "center",
					mb: 3
				  }}
				>
				  <Typography
					variant="h5"
					component="div"
					sx={{
					  color: "#546e7a",
					  display: "flex",
					  alignItems: "center",
					  gap: 1,
					  fontWeight: 500
					}}
				  >
					I'm a{" "}
					<Box
					  component="span"
					  sx={{
						color: "#3f51b5",
						fontWeight: 600,
						position: "relative",
						"&::after": {
						  content: '""',
						  position: "absolute",
						  bottom: "-4px",
						  left: 0,
						  width: "100%",
						  height: "2px",
						  background: "linear-gradient(90deg, #3f51b5, transparent)",
						}
					  }}
					>
					  <Typewriter
						words={[
						  "Full Stack Developer",
						  "React & Node.js Specialist",
						  "MERN Stack Enthusiast",
												"API & UI Developer",
						  "Wordpress Developer"
						]}
						loop={0}
						cursor
						cursorStyle="|"
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={1000}
					  />
					</Box>
				  </Typography>
				</Box>
  
				<Typography
				  variant="body1"
				  sx={{
					color: "#546e7a",
					mb: 4,
					maxWidth: "550px",
					lineHeight: 1.6
				  }}
				>
				  Experienced Full Stack Developer passionate about crafting seamless, performant web and mobile applications. 
				  Skilled in MERN stack development, API integration, responsive UI/UX, and deploying scalable solutions. 
				  Committed to clean code and collaborative development.
				</Typography>
  
				<Box
				  sx={{
					display: "flex",
					gap: 2,
					flexWrap: "wrap",
				  }}
				>
				  <Button
					href="https://drive.google.com/file/d/1Uum9lRfinEAEidz3QK7Lzws42W5QkHP2/view?usp=sharing"
					variant="contained"
					startIcon={<DownloadIcon />}
					sx={{
					  background: "linear-gradient(90deg, #2b5876 0%, #4e4376 100%)",
					  padding: "10px 24px",
					  borderRadius: "30px",
					  textTransform: "none",
					  fontWeight: 600,
					  color:'#fff',
					  fontSize: "1rem",
					  boxShadow: "0 4px 20px rgba(46, 91, 117, 0.3)",
					  "&:hover": {
						background: "linear-gradient(90deg, #304b63 0%, #4a3a6b 100%)",
						boxShadow: "0 6px 25px rgba(46, 91, 117, 0.4)",
						transform: "scale(1.05)",
					  },
					}}
				  >
					Download CV
				  </Button>
  
				  <Button
					href="https://www.linkedin.com/in/simran-tandon1/"
					variant="outlined"
					startIcon={<LinkedInIcon />}
					sx={{
					  padding: "10px 24px",
					  borderRadius: "30px",
					  textTransform: "none",
					  fontWeight: 600,
					  fontSize: "1rem",
					  color: "#3f51b5",
					  borderColor: "#3f51b5",
					  "&:hover": {
						backgroundColor: "#e8eaf6",
						borderColor: "#3f51b5",
					  },
					}}
				  >
					LinkedIn
				  </Button>
  
				  <Button
					href="https://github.com/simrantandon2801"
					variant="outlined"
					startIcon={<GitHubIcon />}
					sx={{
					  padding: "10px 24px",
					  borderRadius: "30px",
					  textTransform: "none",
					  fontWeight: 600,
					  fontSize: "1rem",
					  color: "#3f51b5",
					  borderColor: "#3f51b5",
					  "&:hover": {
						backgroundColor: "#e8eaf6",
						borderColor: "#3f51b5",
					  },
					}}
				  >
					GitHub
				  </Button>
				</Box>
			  </motion.div>
			</Grid>
  
			<Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
			  <motion.img
				src={Hero1}
				alt="Simran Tandon Portrait"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				style={{
				  width: "100%",
				  maxWidth: "400px",
				  display: "block",
				  margin: "0 auto",
				  borderRadius: "20px",
				  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
				}}
			  />
			</Grid>
		  </Grid>
		</Container>
	  </Box>
	);
  }
  
  export default Hero;
