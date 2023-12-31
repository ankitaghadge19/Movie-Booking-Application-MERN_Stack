import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, newBooking } from "../../api-helpers/api-helpers";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Booking = () => {
  const [movie, setMovie] = useState();
  const [inputs, setInputs] = useState({ seatNumber: "", date: "" });
  const id = useParams().id;

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newBooking({ ...inputs, movie: movie._id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      {movie && (
        <Fragment>
          <Typography
            padding={3}
            fontFamily="fantasy"
            variant="h4"
            textAlign="center"
            sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Book Tickets for Movie: {movie.title}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <img
                  width="100%"
                  height="300px"
                  src={movie.posterUrl}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#2196f3" }}>
                    About the Movie:
                  </Typography>
                  <Typography paragraph>{movie.description}</Typography>
                  <Typography variant="h6" sx={{ color: "#2196f3" }}>
                    Film stars:
                  </Typography>
                  <Typography paragraph>
                    {movie.actors.map((actor, index) => (
                      <React.Fragment key={actor}>
                        {index > 0 && ", "} {actor}
                      </React.Fragment>
                    ))}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#2196f3" }}>
                    Released Date:
                  </Typography>
                  <Typography>
                    {new Date(movie.releaseDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardContent>
                    <Box padding={3} display="flex" flexDirection="column">
                      <FormLabel>Seat Number</FormLabel>
                      <TextField
                        name="seatNumber"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        value={inputs.seatNumber}
                        onChange={handleChange}
                      />

                      <FormLabel>Booking Date:</FormLabel>
                      <TextField
                        name="date"
                        type="date"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        value={inputs.date}
                        onChange={handleChange}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 3 }}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </form>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Container>
  );
};

export default Booking;
