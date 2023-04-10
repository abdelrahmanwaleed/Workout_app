import React from "react";
import { Stack } from "@mui/material";
import PropagateLoader from "react-spinners/PropagateLoader";
const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <PropagateLoader color="gray" />
    </Stack>
  );
};

export default Loader;
