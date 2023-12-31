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
import SearchIcon from "@mui/icons-material/Search";
import { getAllMovies } from "../api-helpers/api-helpers";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "../store";

const Header = () => {
  const dispatch = useDispatch();

  //To get the state of admin and user from store->index.js
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  const logout = (isAdmin) => {
    dispatch(isAdmin ? adminActions.logout() : userActions.logout());
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "black" }}>
      <Toolbar>
        <Box width={"20%"}>
          <MovieIcon />
        </Box>
        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            freeSolo
            options={movies && movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                sx={{
                  input: { color: "white" },
                  borderBottom: "1px solid white",
                }}
                variant="standard"
                {...params}
                placeholder="Search Across Movies"
                InputProps={{
                  startAdornment: (
                    <Box sx={{ marginRight: 1 }}>
                      <SearchIcon style={{ color: "white" }} />
                    </Box>
                  ),
                }}
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
            <Tab LinkComponent={Link} to="/movies" label="Movies" />
            {!isAdminLoggedIn && !isUserLoggedIn && (
              <>
                <Tab LinkComponent={Link} to="/auth" label="Auth" />
                <Tab LinkComponent={Link} to="/admin" label="Admin" />
              </>
            )}

            {isUserLoggedIn && (
              <>
                <Tab LinkComponent={Link} to="/user" label="Profile" />
                <Tab
                  onClick={() => logout(false)}
                  LinkComponent={Link}
                  to="/"
                  label="Logout"
                />
              </>
            )}

            {isAdminLoggedIn && (
              <>
                <Tab LinkComponent={Link} to="/admin" label="Profile" />
                <Tab LinkComponent={Link} to="/add" label="Add Movie" />
                <Tab
                  onClick={() => logout(true)}
                  LinkComponent={Link}
                  to="/"
                  label="Logout"
                />
              </>
            )}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
