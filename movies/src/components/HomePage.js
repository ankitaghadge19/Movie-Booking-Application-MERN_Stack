import React from "react";
import { Box, Button, Typography } from "@mui/material";
import MovieItem from "./Movies/MovieItem";

const HomePage = () => {
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="80%" height={"50vh"} padding={2}>
        <img
          src="https://bollynewsuk.files.wordpress.com/2022/09/brahmastra-uk-poster.png"
          alt="Brahmastra"
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
        {[1, 2, 3, 4].map((item) => (
          <MovieItem key={item} />
        ))}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button variant="outlined" sx={{margin:'auto', color: "#2b2d42"}}> View All Movies</Button>
      </Box>
    </Box>
  );
};

export default HomePage;
