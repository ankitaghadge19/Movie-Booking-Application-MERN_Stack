import express from 'express';
import { addMovie, getAllMovieById, getAllMovies } from '../controllers/movie-controller';
const movieRouter = express.Router();

movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getAllMovieById);
movieRouter.post("/", addMovie);


export default movieRouter;