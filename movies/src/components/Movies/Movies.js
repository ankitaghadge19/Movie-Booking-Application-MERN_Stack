import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api-helpers/api-helpers";
import MovieItem from "./MovieItem";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box margin={"auto"} marginTop={0}>
      <Typography
        margin={"auto"}
        bgcolor={"#9c27b0"}
        width="100%"
        padding={1}
        color="white"
        textAlign={"center"}
        variant="h5"
      >
        All Movies
      </Typography>
      <Box
        margin={"auto"}
        display="flex"
        width="100%"
        justifyContent={"center"}
        alignItems="center"
        flexWrap="wrap"
      >
        {movies &&
          movies.map((movie, index) => (
            <MovieItem
              key={index}
              id={movie._id}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              title={movie.title}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Movies;
