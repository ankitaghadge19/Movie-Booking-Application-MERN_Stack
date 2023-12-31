import {
  Box,
  Button,
  Dialog,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";

const AuthForm = ({ onSubmit, isAdmin }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ inputs, signup: isAdmin ? false : isSignup });
  };

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: "auto", p: 1 }}>
        <IconButton>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h5" textAlign="center" sx={{ my: 0 }}>
        {isSignup ? "Signup" : "Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          p={isSmallScreen ? 2 : 3}
          display="flex"
          flexDirection="column"
          width={isSignup ? (isSmallScreen ? "90%" : 350) : (isSmallScreen ? "90%" : 300)}
          margin="auto"
        >
          {!isAdmin && isSignup && (
            <>
              <TextField
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
                variant="standard"
                type="text"
                name="name"
                label="Name"
              />
            </>
          )}

          <TextField
            value={inputs.email}
            onChange={handleChange}
            margin="normal"
            variant="standard"
            type="email"
            name="email"
            label="Email"
          />

          <TextField
            value={inputs.password}
            onChange={handleChange}
            margin="normal"
            variant="standard"
            type="password"
            name="password"
            label="Password"
          />
          <Button
            sx={{ mt: 2, borderRadius: 8, bgcolor: "black", fontSize: "0.9rem" }}
            variant="contained"
            type="submit"
            fullWidth
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          {!isAdmin && (
            <Button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              sx={{ mt: 1, borderRadius: 8, fontSize: "0.8rem" }}
              fullWidth
            >
              Switch to {isSignup ? "Login" : "Signup"}
            </Button>
          )}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
