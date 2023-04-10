import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import logoFooter from "../assets/images/gymlogo.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={logoFooter} alt="logo" width="200px" height="400px" />
      </Stack>
    </Box>
  );
};

export default Footer;
