const MoviesService = require("../services/moviesService");

class MoviesController {
  static getMovies = async (req, res, next) => {
    try {
      const data = await MoviesService.getMovies(next);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  static getMovieById = async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await MoviesService.getMovieById(id, next);
      if (!data.data) {
        next({ status: 404, message: "Data not found" });
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      next(error);
    }
  };

  static createMovie = async (req, res, next) => {
    try {
      const data = await MoviesService.createMovie(req.body, next);
      res.status(201).json({ message: "Success added movie", data });
    } catch (error) {
      next(error);
    }
  };

  static updateMovie = async (req, res, next) => {
    try {
      const data = await MoviesService.updateMovie(req.body, req.params, next);
      res.status(200).json({ message: "Success updated movie", data });
    } catch (error) {
      next(error);
    }
  };

  static deleteMovie = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MoviesService.deleteMovie(id, next);

      if (!data) {
        next({ status: 404, message: "Data not found" });
      } else {
        res
          .status(200)
          .json({ message: `Success deleted movie with id : ${id}`, data });
      }
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MoviesController;
