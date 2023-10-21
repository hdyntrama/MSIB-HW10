const Movies = require("../models/Movies");

class MoviesRepository {
  static getMovies = (next) => {
    try {
      return Movies.getMovies(next);
    } catch (error) {
      next(error);
    }
  };

  static getMovieById = (id, next) => {
    try {
      return Movies.getMovieById(id, next);
    } catch (error) {
      next(error);
    }
  };

  static createMovie = (body, next) => {
    try {
      return Movies.createMovie(body, next);
    } catch (error) {
      next(error);
    }
  };

  static updateMovie = (body, params, next) => {
    try {
      return Movies.updateMovie(body, params, next);
    } catch (error) {
      next(error);
    }
  };

  static deleteMovie = (id, next) => {
    try {
      return Movies.deleteMovie(id, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MoviesRepository;
