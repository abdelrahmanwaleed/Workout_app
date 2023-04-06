import React from "react";
import { Stack, Typography } from "@mui/material";
import glogo from "../assets/icons/gymicon.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="scale-100 hover:scale-110 ease-in-out"
      sx={{
        borderTop: bodyPart === item ? "4px solid #333" : " ",
        backgroundColor: "#FAF9F6",
        borderBottomLeftRadius: "20px",
        width: "250px",
        height: "260px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={glogo} alt="gymicon" className="w-16 h-16" />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
