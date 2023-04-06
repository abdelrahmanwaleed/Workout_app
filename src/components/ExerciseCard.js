import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Typography } from "@mui/material";
import { border, borderRadius, color } from "@mui/system";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className=" w-[400px] h-[445px] bg-[#fff] border-t-4 border-solid border-[#FF2625] flex no-underline justify-between flex-col p-[10px] scale-100 hover:scale-110"
      to={`/exercise/${exercise.id}`}
    >
      <img
        className="h-[326px]"
        src={exercise.gifUrl}
        alt="exercise.name"
        loading="lazy"
      />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#333"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="20px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
