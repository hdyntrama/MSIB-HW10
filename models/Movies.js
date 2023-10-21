const pool = require("../config");

class Movies {
  static getMovies = async (next) => {
    try {
      const findQuery = `SELECT * FROM movies;`;

      const data = await pool.query(findQuery);
      return data.rows;
    } catch (error) {
      next(error);
    }
  };

  static getMovieById = async (id, next) => {
    try {
      const findById = `SELECT * FROM movies WHERE id=$1;`;

      const data = await pool.query(findById, [id]);
      return { data: data.rows[0] };
    } catch (error) {
      next(error);
    }
  };

  static createMovie = async (body, next) => {
    try {
      const { id, title, genres, year } = body;
      const insertQuery = `INSERT INTO movies(id, title, genres, year)
                            VALUES ($1, $2, $3, $4)
                            RETURNING *;
      `;

      const data = await pool.query(insertQuery, [id, title, genres, year]);
      return data.rows[0];
    } catch (error) {
      next(error);
    }
  };

  static updateMovie = async (body, params, next) => {
    try {
      const { title, genres, year } = body;
      const { id } = params;

      const updateQuery = `UPDATE movies 
                            SET title=$1, genres=$2, year=$3 
                            WHERE id=$4 
                            RETURNING *;
      `;

      const data = await pool.query(updateQuery, [title, genres, year, id]);
      return data.rows[0];
    } catch (error) {
      next(error);
    }
  };

  static deleteMovie = async (id, next) => {
    try {
      const deleteQuery = `DELETE FROM movies 
                            WHERE id = $1
                            RETURNING *;
      `;

      const data = await pool.query(deleteQuery, [id]);

      return data.rows[0];
    } catch (error) {
      next(error);
    }
  };
}

module.exports = Movies;
