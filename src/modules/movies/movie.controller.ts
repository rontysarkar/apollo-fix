import { Request, Response } from "express";
import { MovieService } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
  try {
    const movieData = req.body;
    const result = await MovieService.createMovie(movieData);
    res.json({
      success: true,
      message: "movie add successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: "something was wrong",
      data: err,
    });
  }
};

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieService.getAllMovies();
    res.json({
      success: true,
      message: "get all movie data successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const MovieController = {
  createMovie,
  getAllMovies,
};
