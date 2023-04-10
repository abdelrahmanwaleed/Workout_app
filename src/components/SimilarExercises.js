import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Catogories from "./Catogories";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercise, equipmentExercise }) => {
  return (
    <div>
      <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          mb="33px"
          textTransform="capitalize"
        >
          Exerscises that hit same{" "}
          <span className="text-red-600">Muscle group</span>
        </Typography>
        <Stack sx={{ p: "2", position: "relative" }}>
          {targetMuscleExercise.length ? (
            <Catogories data={targetMuscleExercise} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
      <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          mb="33px"
          textTransform="capitalize"
        >
          Exerscises that use same{" "}
          <span className="text-red-600">Equipment</span>
        </Typography>
        <Stack sx={{ p: "2", position: "relative" }}>
          {equipmentExercise.length ? (
            <Catogories data={equipmentExercise} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
    </div>
  );
};

export default SimilarExercises;
