import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import img1 from "../assets/images/workout1.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#333" fontWeight="600" fontSize="24px">
        Fitness Center
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="24px"
        mt="30px"
      >
        Every Workout <br /> is PROGRESS
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Go throught our most effective Workouts
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercise"
        sx={{ background: "ff2625", padding: "10px" }}
      >
        More Exercises
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercise
      </Typography>
      <img
        className="absolute right-10 top-0 w-[700px] h-[900px] mt-[-330px] rounded-b-full  hidden xl:block"
        src={img1}
        alt="workout"
      />
    </Box>
  );
};

export default HeroBanner;
