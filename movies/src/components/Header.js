import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Autocomplete,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import { getAllMovies } from "../api-helpers/api-helpers";
const dummyArray = ["Bramastra", "After", "My Fault"];

const Header = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    getAllMovies()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <AppBar sx={{ bgcolor: "black" }}>
      <Toolbar>
        <Box width={"20%"}>
          <MovieIcon />
        </Box>
        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            freeSolo
            options={dummyArray.map((option) => option)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                placeholder="Search Across Movies"
              />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="Admin" />
            <Tab label="Auth" />
            <Tab label="Movies" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
