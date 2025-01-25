import express from "express";
import { MovieRoutes } from "./modules/movies/movie.route";
const app = express();

// use parser
app.use(express.json());

app.use("/api/movies", MovieRoutes);

app.get("/", (req, res) => {
  res.send("Hello  world");
});

export default app;
