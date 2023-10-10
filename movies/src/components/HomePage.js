import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import MovieItem from "./Movies/MovieItem";
import movies from "./Movies/Movies";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies);
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="80%" height={"50vh"} padding={2}>
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/events/et00343918-clcadgyeve-landscape.jpg"
          alt="The Kerla Story"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box padding={2} margin="auto">
        <Typography variant="h4" textAlign={"Center"}>
          Latest Release
        </Typography>
      </Box>
      <Box
        margin={"auto"}
        display="flex"
        width="80%"
        justifyContent={"center"}
        alignItems="center"
        flexWrap="wrap"
      >
        {movies &&
          movies.slice(0, 4).map((movie, index) => (
            <MovieItem
              key={index}
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
            />
          ))}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
