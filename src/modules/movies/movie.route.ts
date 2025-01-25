import express from "express";
import { MovieController } from "./movie.controller";

const route = express.Router();

route.post("/", MovieController.createMovie);
route.get("/",MovieController.getAllMovies)

export const MovieRoutes = route;
