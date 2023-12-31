import express from 'express';
import { addMovie, getAllMovieById, getAllMovies, updateMovie } from '../controllers/movie-controller';
const movieRouter = express.Router();

movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getAllMovieById);
movieRouter.post("/", addMovie);
movieRouter.put("/:id", updateMovie);


export default movieRouter;