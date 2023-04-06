import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";

import { ExerciseOptions, youTubeOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideo, setexerciseVideo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseUrlDb = "https://exercisedb.p.rapidapi.com";
      const youTubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseUrlDb}/exercises/exercise/${id}`,
        ExerciseOptions
      );
      setexerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youTubeOptions
      );
      setexerciseVideo(exerciseVideoData.contents);
    };

    fetchExerciseData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
