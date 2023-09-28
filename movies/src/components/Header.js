import React from "react";
import { AppBar, Box, Toolbar, Autocomplete, TextField, Tabs, Tab } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
const dummyArray = ["Bramastra", "After", "My Fault"]

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box width={"20%"}>
          <MovieIcon />
        </Box>
        <Box width={"50%"} margin={"auto"}>
          <Autocomplete
            freeSolo
            options={dummyArray.map((option) => option)}
            renderInput={(params) => <TextField variant="standard" {...params} label="Search Across Movies" />}
          />
        </Box>
        <Box display={'flex'}>
            <Tabs>
                <Tab label="Admin"/>
                <Tab label="Auth"/>
                <Tab label="Movies"/>
            </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
