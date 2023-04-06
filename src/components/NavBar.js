import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/gymlogo.png";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
        px: "20px",
      }}
    >
      <Link to="/">
        <img className="w-16 h-16" src={Logo} alt="gymlogo" />
      </Link>
      <Stack direction="row" gap="40px" fontSize="20px" alignItems="flex-end">
        <Link
          to="/"
          className="no-underline border-b-gray-900 border-b-2 border-solid "
        >
          Home
        </Link>
        <a className="no-underline text-gray-800" href="#exercise">
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
