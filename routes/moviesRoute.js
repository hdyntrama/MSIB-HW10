const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/moviesController");

router.get("/", MoviesController.getMovies);
router.get("/:id", MoviesController.getMovieById);
router.post("/", MoviesController.createMovie);
router.put("/:id", MoviesController.updateMovie);
router.delete("/:id", MoviesController.deleteMovie);

module.exports = router;
