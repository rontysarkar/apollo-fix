import { model, Schema } from "mongoose";
import { TMovie, TMovieReviews } from "./movie.interface";

const movieReviewSchema = new Schema<TMovieReviews>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const movieSchema = new Schema<TMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: String, required: true },
  genre: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  viewCount: { type: Number, required: true },
  reviews: [movieReviewSchema],
});

export const Movie = model<TMovie>("Movie", movieSchema);
