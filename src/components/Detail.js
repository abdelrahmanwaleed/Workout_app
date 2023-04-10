import { Button, Stack, Typography } from "@mui/material";
import React from "react";

import bodypartimg from "../assets/icons/body.png";
import targetpartimg from "../assets/icons/targetpart.png";
import equipmentimg from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  /* DESTRUCTURING */
  const { bodyPart, gifUrl, target, name, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: bodypartimg,
      name: bodyPart,
    },
    {
      icon: targetpartimg,
      name: target,
    },
    {
      icon: equipmentimg,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="w-[729px] h-[742px]"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" fontWeight="bold" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Keep the Hard Workouts on <span>HEAT</span> <br />
          The {name} it hit the {target} in a perefect way using {equipment}{" "}
          that will boost you energy and puts you on top level training.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#a3f5fc",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={item.icon} alt={item.name} className="w-11 h-11" />
            </Button>
            <Typography variant="h5">{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
