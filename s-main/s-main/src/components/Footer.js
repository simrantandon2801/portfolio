
import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box textAlign="center" py={3} mt={5} sx={{ background: "#1e1e1e" }}>
      <Typography variant="body2" color="textSecondary">
        © 2025 Simran Tandon. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
