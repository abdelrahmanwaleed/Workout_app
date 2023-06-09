import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
const ExerciseVideo = ({ exerciseVideo, name }) => {
  <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography
        variant="h3"
        fontWeight="bold"
        mb="33px"
        textTransform="capitalize"
      >
        Watch related videos for <span className="text-red-600">{name}</span>
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideo?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="flex flex-col gap-6 w-[387px] h-[381px] no-underline"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#333">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#333">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
