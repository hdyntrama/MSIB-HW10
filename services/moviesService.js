const MoviesRepository = require("../repositories/moviesRespository");

class MoviesService {
  static getMovies = (next) => {
    try {
      return MoviesRepository.getMovies(next);
    } catch (error) {
      next(error);
    }
  };

  static getMovieById = (id, next) => {
    try {
      return MoviesRepository.getMovieById(id, next);
    } catch (error) {
      next(error);
    }
  };

  static createMovie = (body, next) => {
    try {
      return MoviesRepository.createMovie(body, next);
    } catch (error) {
      next(error);
    }
  };

  static updateMovie = (body, params, next) => {
    try {
      return MoviesRepository.updateMovie(body, params, next);
    } catch (error) {
      next(error);
    }
  };

  static deleteMovie = (id, next) => {
    try {
      return MoviesRepository.deleteMovie(id, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MoviesService;
