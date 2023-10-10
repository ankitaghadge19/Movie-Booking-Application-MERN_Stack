import {
  Box,
  Button,
  Dialog,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
const labelStyle = { mt: 1, mb: 1 };

const AuthForm = () => {
  return (
    <Dialog open={true}>
      <Typography variant="h4" marginTop={2} textAlign={"center"}>
        Login
      </Typography>
      <form>
        <Box
          padding={5}
          display={"flex"}
          justifyContent={"center"}
          flexDirection="column"
          width={400}
          margin="auto"
          alignContent={"center"}
        >
          <FormLabel sx={labelStyle}>Name</FormLabel>
          <TextField
            margin="normal"
            variant="standard"
            type={"text"}
            name="name"
          />
          <FormLabel sx={labelStyle}>Email</FormLabel>
          <TextField
            margin="normal"
            variant="standard"
            type={"email"}
            name="email"
          />
          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField
            margin="normal"
            variant="standard"
            type={"password"}
            name="password"
          />
          <Button
            sx={{ mt: 2, borderRadius: 10, bgcolor: "black" }}
            variant="contained"
            type="submit"
            fullWidth
          >
            Login
          </Button>
          <Button sx={{ mt: 2, borderRadius: 10 }} type="submit" fullWidth>
            Switch
          </Button>
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
